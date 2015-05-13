'use strict';

var React = require('react');

var Test = React.createClass({
  displayName: 'bar',

  render () {
    return (
      <div>
        Test Component
      </div>
    );
  }
});

module.exports = Test;