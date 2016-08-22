var request = require('request');

var app = require('../server');

var test = require('tape');

test('First test!', function (assert) {
  request.get('http://localhost:3000/api/users', function(err, res) {
    let json = JSON.parse(res.body);
    assert.equal(json[0], 'John', 'name should be John');
    //assert.equal(json[1], 'Joe', 'name should be John');
    assert.end();
  });
});

test('Second test!', function (assert) {
  request.get('http://localhost:3000/api/users', function(err, res) {
    let json = JSON.parse(res.body);
    assert.equal(json[0], 'John', 'name should be John');
    //assert.equal(json[1], 'Joe', 'name should be Joe');
    assert.end();
  });
});