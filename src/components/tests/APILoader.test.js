const frisby = require('frisby');

it ('should return a status of 200', function () {
  return frisby
    .get('http://api.openweathermap.org/data/2.5/forecast?q=bengaluru&appid=1a10633d0578d4d5cdc754ed0626fe67')
    .expect('status', 200);
});