module.exports = {
    hooks: {
      {
        "page:before": function(page) {
          var query = /(\n[+-]{3}).*(\n[+-]{3})/g
          page.content = page.content.replace(query, "")
          return page;
    }
}
    }
};
