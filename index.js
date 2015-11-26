var _ = require('lodash');


function processContent(_page) {
  var query = /(\n[+-]{3}).*(\n[+-]{3})/g
  _page.content = _page.content);
  return _page;
}

module.exports = {
  hooks: {
    'page:before': processContent
  }
};
