
var React = require('react');
var createReactClass = require('create-react-class');

var Link = require('../../shared').Link;

var Content = createReactClass({
  render: function() {
    return (
      <div>
        <div>
<p>
Test text <Link href="test-article">link</Link> page.
</p>
          <div>
            <ul>
              <li><Link href="test-article">link</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = {
  title: "Test Article",
  description: "Test article description.",
  content: <Content />,
};
