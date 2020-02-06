const Moment = require("moment");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const hbsHelpers = require('handlebars-helpers')();

module.exports = function(eleventyConfig) {
  // Add a filter using the Config API
  // eleventyConfig.addFilter( "myFilter", function() {});

  // RSS
  eleventyConfig.addPlugin(pluginRss);

  // Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
  eleventyConfig.addShortcode("whichPartial", function(data) {
    console.dir(data);
    return `${data}`;
  });

  eleventyConfig.addShortcode("myIshyDate", function(date, page) {
    let formattedDate = `${Moment(date).format("YYYY-MM-DD")}, ~${Moment(date).format("h a")}-ish`;
    console.log(date);
    console.log(formattedDate);
    return formattedDate;
  });

  eleventyConfig.addCollection("myPostsReverse", function(collection) {
    return collection.getFilteredByTags("post").reverse();
  });

  // Return Config object.
  return {
    dir: {
      input: "pages",
      includes: "../templates/partials",
      layouts: "../templates/layouts",
      output: "./build"
    }
  };
};
