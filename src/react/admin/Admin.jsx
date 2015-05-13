'use strict';

var React = require('react');

var Admin = React.createClass({
  displayName: 'foo',

  propTypes: {
    text: React.PropTypes.string
  },

  render () {
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
});

module.exports = Admin;