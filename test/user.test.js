var request = require('http');

//var app = require('../server');

var test = require('tap').test;

test('First test!', function (assert) {
  //assert.plan(1);

  request.get('http://localhost:3000/api/users', function(res) {
    assert.equal(res.statusCode, 200)
    var data = ''
    res.on('data', (chunk) => {
      data += chunk
    })
    res.on('end', () => {
      let json = JSON.parse(data);
      assert.equal(json[0], 'John', 'name should be John');
      //assert.equal(json[1], 'Joe', 'name should be Joe');
      assert.end();
    })
  });
});

test('Second test!', function (assert) {
  //assert.plan(1);

  request.get('http://localhost:3000/api/users', function(res) {
    assert.equal(res.statusCode, 200)
    var data = ''
    res.on('data', (chunk) => {
      data += chunk
    })
    res.on('end', () => {
      let json = JSON.parse(data);
      assert.equal(json[0], 'John', 'name should be John');
      //assert.equal(json[1], 'Joe', 'name should be Joe');
      assert.end();
    })
  });
});

