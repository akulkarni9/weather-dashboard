const frisby = require('frisby');

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=bengaluru&appid=${API_KEY}`;

it ('should return a status of 200', function () {
  return frisby
    .get(API_URL)
    .expect('status', 200);
});