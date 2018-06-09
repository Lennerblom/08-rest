'use strict';
const superagent = require('superagent');
describe('app', () => {
  it('should return the ID for GET /?id =123', () => {

    superagent
      .get('http://localhost:3002/api/vi/dogs?id=123')
      .then(data => console.log(data))
      .catch(err => console.error(err));
  });
});