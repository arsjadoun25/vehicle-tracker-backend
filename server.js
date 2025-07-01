const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // 🔥 this fixes CORS

const routeData = JSON.parse(fs.readFileSync('dummyRoute.json', 'utf8'));
let index = 0;

app.get('/api/vehicle-location', (req, res) => {
  const data = routeData[index];
  res.json(data);
  index = (index + 1) % routeData.length;
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
