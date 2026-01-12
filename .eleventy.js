module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");
  eleventyConfig.setBrowserSyncConfig({ files: './_site/assets/**/*' });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site"
    },
    pathPrefix: process.env.ELEVENTY_ENV === 'production' ? '/dbml26/' : '/',
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
