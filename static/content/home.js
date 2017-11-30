
var React = require('react');
var createReactClass = require('create-react-class');

var Link = require('../shared').Link;

var Content = createReactClass({
  render: function() {
    return (
      <div>
<p>Homepage</p>
<Link href="/article/test-article">test-article</Link>
      </div>
    )
  }
});

module.exports = {
  title: "rapid-express-react example homepage",
  description: "An example homepage description.",
  content: <Content />,
};
