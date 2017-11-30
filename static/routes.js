
function setupCommonRoutes(common) {
  common.routes = {
    homepage: '/',
    article: '/article',
  };
}

// Export to NodeJS, if it exists
if (typeof module !== 'undefined') {
  module.exports = function(common) {
    setupCommonRoutes(common);
  };
} else {
  setupCommonRoutes(common);
}

