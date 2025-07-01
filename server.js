const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');

app.use(cors());

// Will use render assigned port or fallback to 5000
const PORT = process.env.PORT || 5000;

const routeData = JSON.parse(fs.readFileSync(dummyRoute.json, 'utf8'));

let index = 0;

app.get('/api/vehicle-location', (req, res) =>{
    const location = routeData[index];
    index = (index+1) % routeData.length;
    res.json(location);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});