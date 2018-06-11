'use strict';

const router = require('../lib/router.js');

router.get('/', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  let name = req.query.name || '';
  res.write(`Hello ${name}`);
  res.end();
});

router.get('/api/v1/dogs', (req, res) => {
  const id = req.query.id;
  if(id <= 2018 && id > 0) {
    res.statusCode = 200;
    let msg = `ID: ${req.query.id}`;
    res.write(msg);
  } else if(id) {
    res.statusCode = 404;
    res.statusMessage = 'not found';
    console.log(res.statusMessage);
  } else {
    res.statusCode = 400;
    res.statusMessage = 'bad request';
    console.log(res.statusMessage);
  }
  res.end();
});

router.post('/api/v1/dogs', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  if(req.body) {
    res.write( JSON.stringify(req.body));
  } else {
    res.statusCode = 400;
  }
  res.end();
});

router.put('/api/v1/dogs', (req, res) => {
  const id = req.query.id;
  if(id) {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    let msg = '{"ID": "`${req.query.id}`", "content": "PUT to the test"}';
    res.write(JSON.stringify(msg));
  } else {
    res.statusCode = 400;
    res.statusMessage = 'bad request';
    console.log(res.statusMessage);
  }
  res.end();

  router.delete('/api/v1/dogs', (req,res) => {
    const id = req.query.id;
    if(id === req.body.id) {
      delete(req.query.id);
      let msg = `Deleted ID: ${req.query.id}`;
      res.write(msg);
      res.statusCode = 400;

    }
  });
});

module.exports = {};