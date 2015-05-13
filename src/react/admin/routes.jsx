'use strict';

var React = require('react');
var Router = require('react-router');

var Admin = require('./Admin');
var Test = require('./Test');

var Route = Router.Route;

var prefix = '/admin';
var server = (typeof window === 'undefined');
var routes, paths;

paths = {
  admin: server ? '/' : prefix,
  test: server ? '/test' : prefix + '/test'
};

routes = (
  <Route handler={Admin} path={paths.admin}>
    <Route handler={Test} path={paths.test}/>
  </Route>
);

module.exports = routes;