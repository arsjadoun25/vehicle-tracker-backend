//Generating JSON from encoded polyline
const polyline = require('@mapbox/polyline');
const fs = require('fs');

const encoded = 'onw~F~kbpMyD_CkB}BaBeAq@}@kAm@e@k@u@m@aA}AwAeAaBoAiA_AaAc@a@';
const coordinates = polyline.decode(encoded);

const jsonData = coordinates.map(([lat, lng], i) =>({
    latitude: lat,
    longitude: lng,
    timestamp: new Date(Date.now() + i * 1000).toISOString()
}));

fs.writeFileSync('dummyRoute.json', JSON.stringify(jsonData, null, 2));