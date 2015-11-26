function processContent(_page) {
  var query = /[+-]{3}[\s\S]*[+-]{3}/;
  _page.content = _page.content.replace(query, "");
  return _page;
}

module.exports = {
  hooks: {
    'page:before': processContent
  }
};
