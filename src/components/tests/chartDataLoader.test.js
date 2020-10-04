const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exports Joi for convenience on type assersions

it('should return JSON data', async () => {
    return frisby
      .get('http://api.openweathermap.org/data/2.5/forecast?q=bengaluru&appid=1a10633d0578d4d5cdc754ed0626fe67')
      .expect('status', 200)
      .expect('jsonTypes', Joi.object({
            cnt: Joi.number().required(),
            cod: Joi.string().required(),
            message: Joi.number().required()
        }).required()
    );
});