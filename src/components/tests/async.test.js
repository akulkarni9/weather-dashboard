const fetchMock = require('fetch-mock');

import asyncFetch from '../async-fetch'

describe('asyncFetch', () => {

    it('can fetch', async ()=> {
        
        const URL = 'https://www.fake.com/';

        fetchMock.get(URL, {hello: "world"});

        const response = await asyncFetch(URL);
        const results = await response.json();

        expect(results.hello).toEqual("world");

    })

});