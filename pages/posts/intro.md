---
title: Current Status 
tags: post
---

Naming Things is Hard has been around for a while, though it’s been quiet. It’s been running on Drupal 8, because I've been using Drupal professionally since Drupal 6, and I wanted to jump in and learn more about Drupal 8, but basically what I learned is that Drupal 8 is hard, and I learned it annoyed me a lot, and I learned it no longer felt fun for hobby-level use. I have many thoughts about this. I have many _feels_ about this. I’m not sharing them all right now. It’s annoying.

But hey, you know what _is_ fun? HTML. CSS. JS. Throwing things into folders and a website popping out of the other. Static sites! Static sites are fun!

I've been playing in the static-site realm for a while now; I've done some stuff for the day job here and there, I've got [a ridiculously-named personal site](https://github.com/darby3/chickenwing-gingerbreadman) that is a huge mess, I've made [site builder-y things](https://github.com/darby3/npmScriptsStarter) powered by actual site builders. 

Until recently for the template-building part I was using [Assemble](https://github.com/assemble/assemble/), which worked _okay_, but. It was starting to feel like I was jumping through too many hoops, not doing enough triumphant post-leap victory-posing. Enter [Eleventy](https://www.11ty.dev/), which is what I’m using, in part, to re-launch/re-develop this site. It's cool. Eleventy feels modern and clean and it generally makes sense to me and I think I generally make sense to it. We seem to be developing a good working relationship. 

JS and CSS (Sass) build steps are still just npm scripts using node-sass and babel and browserify and whatever. It's not too fancy.

Right now I'm still using a temporary Netlify url until I can figure out how to migrate out all the old junk into this new hotness. (I do have weird feels about using Netlify. I pay for web hosting! These are just files! Files, man! But, hell, it's too easy. Maybe eventually I'll do something involving an Express server in the background or something and then I'll have to migrate back over to my hosting provider. I don't know. Hrmf.) Then eventually I'm going to throw the Drupal 8 build at the moon and be done with it. I'd say it'll feel like the end of a personal era though it's not, not really; I'm hardly done with Drupal, I'm going to be involved in migrating the day job website to Drupal 8 over the near year or so, and I am excited about that. But it definitely represents a fairly clean break between work-brain and personal-brain. At least until I rewrite Drupal 8 in JS using Eleventy and I solve all of the problems forever. 
