const Moment = require('moment-timezone');
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // Add a filter using the Config API
  // eleventyConfig.addFilter( "myFilter", function() {});

  // Merge data when cascading data
  eleventyConfig.setDataDeepMerge(true);

  // Useful for dynamically selecting partials on the fly
  eleventyConfig.addShortcode("whichPartial", function(data) {
    return `${data}`;
  });

  // Foil the trackers by reducing times to their hours, ishyily
  eleventyConfig.addShortcode("myIshyDate", function(date, page) {
    let now = Moment.tz(date, 'America/New_York');

    let formattedDate = `${now.format("MMMM D, YYYY")}`;
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

  eleventyConfig.addShortcode("checkDraft", function(value) {
    return value === 'draft';
  });

  eleventyConfig.addShortcode("checkTil", function(value) {
    return value === 'today-i-learned';
  });

  eleventyConfig.addShortcode("checkLink", function(value) {
    return value === 'link-of-note';
  });

  eleventyConfig.addShortcode("isCollectionTag", function(value) {
    const collectionTags = ['blog-page', 'link-of-note', 'today-i-learned'];
    return collectionTags.includes(value);
  });

  eleventyConfig.addShortcode("whichCollection", function(value) {
    if (!value) {
      return "";
    }

    const collectionTags = ['blog-page', 'link-of-note', 'today-i-learned'];

    for (let i = 0; i < collectionTags.length; i++) {
      const tag = collectionTags[i];

      if (value.includes(tag)) {
        return tag;
      }
    }

    return "";
  });

  // I can probably make this generic so I can dynamically call for set numbers
  // of items from template files, but for now this is good enough
  eleventyConfig.addCollection("mostRecentBlogs", function(collection) {
    // Filter out draft posts and private posts.
    // Private posts aren't excluded from the repo, of course. They're just
    // really _really_ not published.
    const draftTerms = ['draft', 'private'];

    let recentBlogs = collection.getFilteredByGlob(["pages/posts/*.md", "pages/link/*.md", "pages/til/*.md"]);
    recentBlogs = recentBlogs.filter(el => !el.data.tags.some(tag => draftTerms.includes(tag)));
    recentBlogs = recentBlogs.reverse().slice(0, 5);

    return recentBlogs;
  });

  // I can probably make this generic so I can dynamically call for set numbers
  // of items from template files, but for now this is good enough
  eleventyConfig.addCollection("mostRecentBlogsForRSS", function(collection) {
    // Filter out draft posts and private posts.
    // Private posts aren't excluded from the repo, of course. They're just
    // really _really_ not published.
    const draftTerms = ['draft', 'private'];

    let recentBlogs = collection.getFilteredByGlob(["pages/posts/*.md", "pages/link/*.md", "pages/til/*.md"]);
    recentBlogs = recentBlogs.filter(el => !el.data.tags.some(tag => draftTerms.includes(tag)));
    recentBlogs = recentBlogs.reverse().slice(0, 10);

    return recentBlogs;
  });

  // Copy assets.
  eleventyConfig.addPassthroughCopy({
    "favico": "/",
    "pages/admin": "/admin",
  });


    // When `permalink` is false, the file is not written to disk
	eleventyConfig.addGlobalData("eleventyComputed.permalink", function() {
		return (data) => {
			// Always skip during non-watch/serve builds
			if(data.draft && !process.env.BUILD_DRAFTS) {
				return false;
			}

			return data.permalink;
		}
	});

  // When `eleventyExcludeFromCollections` is true, the file is not included in any collections
	eleventyConfig.addGlobalData("eleventyComputed.eleventyExcludeFromCollections", function() {
		return (data) => {
			// Always exclude from non-watch/serve builds
			if(data.draft && !process.env.BUILD_DRAFTS) {
				return true;
			}

			return data.eleventyExcludeFromCollections;
		}
	});

  	// Return all the tags used in a collection
	eleventyConfig.addFilter("getAllTags", (collection) => {
    let tagSet = new Set();
    for (let item of collection) {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    }
    return Array.from(tagSet);
  });

  eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
    return (tags || []).filter((tag) => ["all", "blog-page", "today-i-learned", "link-of-note"].indexOf(tag) === -1);
  });

	eleventyConfig.on("eleventy.before", ({runMode}) => {
		// Set the environment variable
		if(runMode === "serve" || runMode === "watch") {
			process.env.BUILD_DRAFTS = true;
		}
	});

    // RSS
    eleventyConfig.addPlugin(pluginRss);


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
