const moment = require('moment');
const fs = require('fs');

const now = moment();

const title = process.argv[2] || now.format("YYYY_MM_DD_HH_mm_ss");
const created = now.format();

let output = `---
title: ${title}
date: ${created}
---

`;

fs.writeFile("./pages/posts/" + title + ".md", output, function(err) {
  if(err) {
    return console.log(err);
  }

  console.log("Update file generated: ", title);
});
