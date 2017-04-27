var md = require('markdown-it')({
  html: true,
  langPrefix: '',
  typographer: true,
  linkify: true,
  highlight: function (str, lang) {
    if (lang) {
      try {
        return '<pre class="brush:jscript;">' +
               str +
               '</pre>';
      } catch (__) {}
    }

    return '<pre class="brush:jscript;">' + str + '</pre>';
  }
})
.use(require('markdown-it-anchor'), {
  level: 1,
  // slugify: string => string,
  permalink: false,
  // renderPermalink: (slug, opts, state, permalink) => {},
  permalinkClass: 'header-anchor',
  permalinkSymbol: '¶',
  permalinkBefore: false
});

module.exports = md
