const Moment = require("moment");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // Add a filter using the Config API
  // eleventyConfig.addFilter( "myFilter", function() {});

  // RSS
  eleventyConfig.addPlugin(pluginRss);

  // Merge data when cascading data
  eleventyConfig.setDataDeepMerge(true);

  // Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
  eleventyConfig.addShortcode("whichPartial", function(data) {
    // console.dir(data);
    return `${data}`;
  });

  eleventyConfig.addShortcode("myIshyDate", function(date, page) {
    let formattedDate = `${Moment(date).format("YYYY-MM-DD")}, ~${Moment(date).format("h a")}-ish`;
    // console.log(date);
    // console.log(formattedDate);
    return formattedDate;
  });

  eleventyConfig.addCollection("myPostsReverse", function(collection) {
    return collection.getFilteredByTags("post").reverse();
  });

  eleventyConfig.addCollection("myBlogsReverse", function(collection) {
    return collection.getFilteredByTags("blog-page").reverse();
  });

  eleventyConfig.addCollection("mostRecentBlogs", function(collection) {
    return collection.getFilteredByTags("blog-page").reverse().slice(0, 3);
  });

  eleventyConfig.addCollection("myLinksReverse", function(collection) {
    return collection.getFilteredByTags("link-of-note").reverse();
  });

  eleventyConfig.addCollection("myTILReverse", function(collection) {
    return collection.getFilteredByTags("today-i-learned").reverse();
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
