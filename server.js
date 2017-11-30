
var initServer = require('rapid-express-react')();
var common = initServer.initCommon({});
if (common == null) return;
// Add server-client shared utils to common
require('rapid-express-react/static/common')(common);
require('./static/routes')(common);

var Log = common.log(__filename, 'server');

initServer.initExpress(common, __dirname + '/partials');

var babelRenderContent = require('rapid-express-react/babelRenderContent')(
  __dirname + '/static/content',
  __dirname + '/static/app');
var pagePartial = 'page';

common.initExpressStaticPath = initServer.initExpressStaticPath;
common.initExpressStaticPath(common, null, __dirname + '/static');

var server = common.expressApp.listen(common.env.get('HTTP_PORT'), function() {
  Log.console("Listening on port " + server.address().port.toString() + " for HTTP");
});

// ======
// Routes
// ======
//
common.expressApp.get('/robots.txt', function (request, response) {
  response.sendFile('static/rapid-express-react/static/robots.txt', {root: __dirname});
});

common.expressApp.get('/favicon.png', function (request, response) {
  response.sendFile('static/img/favicon.png', {root: __dirname});
});

common.expressApp.get(common.routes.homepage, babelRenderContent.fetchContent(pagePartial, 'home'));

common.expressApp.get(common.routes.article + '/:articleId',
  function(request, response) {
    return babelRenderContent.fetchContent(pagePartial, common.routes.article + '/' + request.params.articleId)(request, response);
  });

