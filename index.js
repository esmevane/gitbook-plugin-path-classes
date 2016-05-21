module.exports = {
  hooks: {
    "page": function(page) {
      var classes = page.path.replace('.md', '').split('/').join(' ');

      page.content = "<div class='" + classes "'>" + page.content + "</div>";

      return page;
    }
  }
};
