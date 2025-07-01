const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

const vehicleData = require('./dummyRoute.json');

let index = 0;

app.use(cors());

app.get('/api/vehicle-location', (req, res) =>{
    const point = vehicleData[index];
    index = (index+1) % vehicleData.length;
    res.json(point);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});