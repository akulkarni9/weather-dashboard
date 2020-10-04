const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exports Joi for convenience on type assersions

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=bengaluru&appid=${API_KEY}`;

it('should return JSON data', async () => {
    return frisby
      .get(API_URL)
      .expect('status', 200)
      .expect('jsonTypes', Joi.object({
            cnt: Joi.number().required(),
            cod: Joi.string().required(),
            message: Joi.number().required()
        }).required()
    );
});