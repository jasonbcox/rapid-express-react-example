
var React = require('react');
var createReactClass = require('create-react-class');

var Shared = require('./shared');

module.exports = createReactClass({
  getInitialState: function() {
    return {
      content: this.props.initialState.content,
    }
  },
  render: function() {
    var bodyContentStyle = Object.assign({}, Shared.StyleZDepth1 ,{
      backgroundColor: 'white',

      padding: '8px',
      marginTop: '6px',
      minHeight: '300px',
    });
    return (
      <div>
        <Shared.Nav />
        <div style={bodyContentStyle} dangerouslySetInnerHTML={{__html: this.state.content}} />
      </div>
    )
  }
});
