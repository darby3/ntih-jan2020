const moment = require('moment');
const fs = require('fs');
const prompt = require('prompt');

const now = moment();

let title = process.argv[2] || now.format("YYYY-MM-DD-HH-mm-ss");
const created = now.toISOString(true);


var schema = {
  properties: {
    title: {
      pattern: /^[a-zA-Z0-9_\s\-]+$/,
      message: 'Name must be only letters, spaces, or dashes',
      required: false,
      default: title,
    },
    type: {
      required: true,
      default: 'blog-page',
      pattern: /^today-i-learned|blog-page|link-of-note$/,
      message: 'Type must be today-i-learned, blog-page, or link-of-note'
    }
  }
};

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: email, password
//
prompt.get(schema, function (err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:');
  console.log('  title: ' + result.title);
  console.log('  type: ' + result.type);

  if (result.title) {
    title = result.title;
  }

  let outputDir = "./pages/";

  if (result.type === "link-of-note") {
    outputDir += "link/";
  } else if (result.type === "today-i-learned") {
    outputDir += "til/";
  } else {
    outputDir += "posts/";
  };

  let output = `---
title: ${title}
date: ${created}
draft: true
tags:
  - ${result.type}
---

`;

  if (fs.existsSync(outputDir + title + ".md")) {
    throw("AWWWWWWWWWW FUDGE THAT FILE EXISTS");
  }
  fs.writeFile(outputDir + title + ".md", output, function(err) {
    if(err) {
      return console.log(err);
    }

    console.log("Update file generated: ", title);
  });
});
