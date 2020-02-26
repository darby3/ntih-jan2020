const Moment = require("moment");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // Add a filter using the Config API
  // eleventyConfig.addFilter( "myFilter", function() {});

  // RSS
  eleventyConfig.addPlugin(pluginRss);

  // Merge data when cascading data
  eleventyConfig.setDataDeepMerge(true);

  // Useful for dynamically selecting partials on the fly
  eleventyConfig.addShortcode("whichPartial", function(data) {
    return `${data}`;
  });

  // Foil the trackers by reducing times to their hours, ishyily
  eleventyConfig.addShortcode("myIshyDate", function(date, page) {
    let formattedDate = `${Moment(date).format("YYYY-MM-DD")}, ~${Moment(date).format("h a")}-ish`;
    return formattedDate;
  });

  // reverse an array? note: I'm still wildly unclear on the difference between filters and shortcodes and when i should
  // use one or the other. so here's two options.
  eleventyConfig.addFilter("reverseThatArray", function(value) {
    return value.reverse();
  });

  eleventyConfig.addShortcode("scReverse", function(value) {
    return value.reverse();
  });

  // I can probably make this generic so I can dynamically call for set numbers
  // of items from template files, but for now this is good enough
  eleventyConfig.addCollection("mostRecentBlogs", function(collection) {
    // Filter out draft posts and private posts.
    // Private posts aren't excluded from the repo, of course. They're just
    // really _really_ not published.
    const draftTerms = ['draft', 'private'];

    let recentBlogs = collection.getFilteredByTags("blog-page");
    recentBlogs = recentBlogs.filter(el => !el.data.tags.some(tag => draftTerms.includes(tag)));
    recentBlogs = recentBlogs.reverse().slice(0, 5);

    return recentBlogs;
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
