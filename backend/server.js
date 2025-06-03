// /home/donta/project1/backend/server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET'],
  allowedHeaders: ['Content-Type']
}));

app.get('/api/covid', (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'covid_data.json');
    if (fs.existsSync(dataPath)) {
      const rawData = fs.readFileSync(dataPath, 'utf8');
      const data = JSON.parse(rawData);
      console.log('Serving COVID data from file:', { national: data.national, stateCount: data.stateData?.length });
      res.json(data);
    } else {
      console.warn('COVID data file not found, returning empty response');
      res.status(404).json({ error: 'COVID data file not found. Run scraper.js to generate data.', national: {}, stateData: [] });
    }
  } catch (error) {
    console.error('Error serving COVID data:', error.message);
    res.status(500).json({ error: 'Failed to load COVID data.', national: {}, stateData: [] });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/api/covid`);
});
