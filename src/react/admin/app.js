'use strict';

var React = require('react');
var Router = require('react-router');

var routes = require('./routes');

var text = 'hello, world!';

Router
  .create({
    routes,
    location: Router.HistoryLocation
  })
  .run((Handler) => {
    React.render(<Handler text={text}/>, document.getElementById('react-mount'));
  });