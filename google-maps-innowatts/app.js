const express = require('express');
// require('dotenv').config()


const PORT = process.env.PORT || 3000;
var app = express();

var infoArry = [];

const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDtVbli-DqEY984NnMwLOyl2zh0ZaQZBRQ'
});

googleMapsClient.geocode({
  address: 'SW Scholls Ferry Rd, #102, 97007'
}, function(err, response) {
  if (!err) {
    console.log(response.json.results)

  }
});























app.listen(PORT, () => {
  console.log('Hopefully I get an Interview!')
});
