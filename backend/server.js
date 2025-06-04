// /home/donta/project1/backend/server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
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

// Add this endpoint to your existing server
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    // Temporary responses until Llama3 integration
    const responses = {
      variants: "Current prevalent variants in India: NB.1.8.1 (45%), LF.7 (30%), JN.1 (20%), XFG (5%)",
      symptoms: "Common symptoms include fever, cough, sore throat, fatigue. New variants may cause muscle pain or headaches.",
      precautions: "Wear masks in crowded areas, maintain hand hygiene, get vaccinated, avoid large gatherings.",
      medicine: "Approved treatments include antiviral medications and symptom relievers. Consult a doctor.",
      natural: "Honey for cough, turmeric milk for immunity, steam inhalation. These complement medical treatment."
    };

    const reply = Object.entries(responses).find(([key]) => 
      message.toLowerCase().includes(key)
    )?.[1] || "I can help with COVID-19 info about variants, symptoms, precautions, and treatments. What would you like to know?";

    res.json({ reply });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/api/covid`);
});
