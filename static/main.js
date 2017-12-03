
var React = require('react');
var ReactDOM = require('react-dom');
var ClientRenderContent = require('rapid-express-react/clientRenderContent');

var App = require('./app');

ReactDOM.hydrate(<App content={ClientRenderContent(window.__INITIAL_STATE__.content)} />,  document.getElementById('container'));
