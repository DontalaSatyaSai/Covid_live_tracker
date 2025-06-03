// /home/donta/project1/backend/scraper.js
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function scrapeMoHFWData(retries = 3, delay = 2000) {
  for (let i = 0; i < retries; i++) {
    try {
      console.log(`Attempt ${i + 1} to scrape MoHFW dashboard for public health data...`);
      console.log('Note: This script is for non-commercial use and respects server load by limiting requests.');
      console.log('Ensure you have permission from MoHFW or comply with robots.txt at https://www.mohfw.gov.in/robots.txt');
      
      // Launch headless browser with minimal impact settings
      const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
      const page = await browser.newPage();
      
      // Set a delay to avoid overloading the server (ethical practice)
      await page.setDefaultNavigationTimeout(60000);
      await page.setRequestInterception(true);
      page.on('request', (req) => {
        if (['image', 'stylesheet', 'font'].includes(req.resourceType())) {
          req.abort(); // Skip non-essential resources to reduce load
        } else {
          req.continue();
        }
      });

      // Navigate to MoHFW dashboard
      const targetUrl = 'https://covid19dashboard.mohfw.gov.in/';
      console.log(`Navigating to ${targetUrl}...`);
      await page.goto(targetUrl, { waitUntil: 'networkidle2' });

      // Wait for any element that might contain stats (broad selector)
      await page.waitForSelector('body', { timeout: 30000 }).catch(() => {
        console.warn('Basic page content not loaded, check network or site availability.');
      });

      // Log page content for debugging national data selectors
      console.log('Searching for national data...');
      const nationalContent = await page.evaluate(() => {
        const possibleContainers = Array.from(document.querySelectorAll('div, section, ul, li, span, p'))
          .filter(el => el.textContent.toLowerCase().includes('total') || el.textContent.toLowerCase().includes('active'));
        return possibleContainers.map(el => ({
          selector: el.tagName.toLowerCase() + (el.className ? '.' + el.className.split(' ').join('.') : ''),
          content: el.textContent.trim().slice(0, 100)
        })).slice(0, 5);
      });
      console.log('Possible national data containers (first 5):', nationalContent);

      // Extract national summary data with updated selectors and label-based mapping
      const national = await page.evaluate(() => {
        // Target elements within .site-stats or related containers
        const elements = Array.from(document.querySelectorAll('.site-stats strong, .site-stats span, .site-stats div, .covid-stats strong, .stats-box strong, .site-stats-count strong, .site-stats-count span'));
        // Filter elements with numeric values and associated labels
        const stats = [];
        elements.forEach(el => {
          const text = el.textContent.trim();
          const parentText = el.parentElement.textContent.trim().toLowerCase();
          if (text.replace(/,/g, '').match(/^\d+$/)) {
            stats.push({
              value: parseInt(text.replace(/,/g, '')) || 0,
              label: parentText
            });
          }
        });
        // Map values based on labels
        let confirmed = 0, active = 0, recovered = 0, deaths = 0;
        stats.forEach(stat => {
          if (stat.label.includes('active')) active = stat.value;
          else if (stat.label.includes('discharged') || stat.label.includes('recovered')) recovered = stat.value;
          // Confirmed might not be explicitly labeled, often the largest number
          else if (stat.value > active && stat.value > recovered && stat.value > 10000) confirmed = stat.value;
          // Deaths might be labeled or a smaller number
          else if (stat.label.includes('death') || (stat.value < active && stat.value < recovered && stat.value > 0)) deaths = stat.value;
        });
        // Find last updated element
        let lastUpdatedElement = null;
        const possibleUpdateElements = Array.from(document.querySelectorAll('.last-updated, .update-time, .timestamp, p, div'));
        for (const el of possibleUpdateElements) {
          if (el.textContent.toLowerCase().includes('as on')) {
            lastUpdatedElement = el;
            break;
          }
        }
        console.log('Stats array for national data:', stats);

        return {
          Country: 'India',
          Confirmed: confirmed,
          Active: active,
          Recovered: recovered,
          Deaths: deaths,
          Date: lastUpdatedElement?.textContent.trim() || new Date().toISOString()
        };
      });
      console.log('Scraped National Data:', national);

      // Log page content for debugging state-wise table selectors
      console.log('Searching for state-wise table...');
      const tableContent = await page.evaluate(() => {
        const possibleTables = Array.from(document.querySelectorAll('table, div.data-table, .state-list, div.table-responsive'));
        return possibleTables.map(table => ({
          selector: table.tagName.toLowerCase() + (table.className ? '.' + table.className.split(' ').join('.') : ''),
          content: table.textContent.trim().slice(0, 100)
        })).slice(0, 5);
      });
      console.log('Possible state-wise table containers (first 5):', tableContent);

      // Wait for state-wise table to load
      await page.waitForSelector('.statetable, table, .data-table, div.table-responsive', { timeout: 30000 }).catch(() => {
        console.warn('State table selector not found, page structure may have changed. Adjust selectors.');
      });

      // Extract state-wise data with updated selectors and precise indexing
      const stateData = await page.evaluate(() => {
        let rows = Array.from(document.querySelectorAll('table.statetable tbody tr, table.table-striped tbody tr, table tbody tr, .data-table tbody tr'));
        if (rows.length === 0) {
          rows = Array.from(document.querySelectorAll('.state-list div, .state-row, div.table-responsive tr'));
        }
        console.log('Found rows for state data:', rows.length);
        if (rows.length > 0) {
          // Log content of first few rows for debugging
          console.log('First row content:', Array.from(rows[0].querySelectorAll('td, div, span')).map(cell => cell.textContent.trim()).join(' | '));
          if (rows.length > 1) {
            console.log('Second row content:', Array.from(rows[1].querySelectorAll('td, div, span')).map(cell => cell.textContent.trim()).join(' | '));
          }
        }
        return rows.map(row => {
          const cells = Array.from(row.querySelectorAll('td, .state-cell, div, span'));
          if (cells.length < 4) return null; // Skip rows with insufficient data (need at least state name and some stats)
          // Log cell content for debugging first few rows
          if (row.rowIndex < 5 && row.rowIndex !== undefined) {
            console.log(`Row ${row.rowIndex} cells:`, cells.map(cell => cell.textContent.trim()).join(' | '));
          }
          // Extract state name (cell 1 as per typical structure, after S.No.)
          const stateText = cells[1]?.textContent.trim() || '';
          // Extract numeric values starting from cell 2 (Active), 3 (Cured/Discharged), 4 (Deaths)
          const numericCells = cells.slice(2).filter(cell => {
            const text = cell.textContent.trim().replace(/,/g, '').replace(/\s+/g, '');
            return /^\d+$/.test(text); // Only numeric content
          });
          if (numericCells.length < 3) return null; // Skip if not enough numeric data
          return {
            state: stateText,
            confirmed: 0, // Not directly available in table, set to 0 or calculate if needed
            active: parseInt(numericCells[0]?.textContent.replace(/,/g, '')) || 0,
            recovered: parseInt(numericCells[1]?.textContent.replace(/,/g, '')) || 0,
            deaths: parseInt(numericCells[2]?.textContent.replace(/,/g, '')) || 0,
            lastUpdated: new Date().toISOString()
          };
        }).filter(s => s && s.state && s.state !== 'Total' && s.state !== '' && !s.state.includes('S. No.') && !s.state.toLowerCase().includes('total'));
      });

      console.log('Scraped State Data (first 5 entries):', stateData.slice(0, 5));

      // Save scraped data to a JSON file
      const outputPath = path.join(__dirname, 'covid_data.json');
      const outputData = { national, stateData };
      fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf8');
      console.log(`Data saved to ${outputPath}. Use this file in your React app.`);

      await browser.close();
      return outputData;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed:`, error.message);
      if (i < retries - 1) {
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(res => setTimeout(res, delay));
      } else {
        console.error('All retry attempts failed.');
        throw error;
      }
    }
  }
}

scrapeMoHFWData().catch(err => console.error('Scraping failed:', err));
