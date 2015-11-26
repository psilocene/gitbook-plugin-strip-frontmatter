module.exports = {
    hooks: {
      {
        "page:before": function(page) {
          page.content = page.content.replace(/(\n[+-]{3}).*(\n[+-]{3})/g, "")
        return page;
    }
}
    }
};
