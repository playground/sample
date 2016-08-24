'use strict';

var express = require('express');
var app = express();
var users = ['John', 'Joe', 'Moe'];

app.get('/api/users', function (req, res) {
  res.json(users);
});

module.exports = app;