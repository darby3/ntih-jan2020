---
title: Of code editors and things
draft: true
date: 2023-03-22T09:20:54.406-04:00
tags:
  - code editors
  - phpstorm
  - vs code
---
Sometime late in 2022 I made the switch from PhpStorm to Visual Studio Code. Now I think I'm switching at least partially back. Maybe!

I really had no interest in making the switch in the first place, but PhpStorm, for whatever reason, was starting to act like a mess, crashing way more than is ideal. I kept updating the app and hoping it would fix whatever problems were plaguing me but then it kept seeming to get worse. Not quite to the point of unusability, but to the point of, between the crashes and a light desire to maybe not have to _pay money_ for my code editor, wondering if maybe it wasn't time to jump off that ship.

So I've been trying to use VS Code since, and I do generally like it, once I got up and running with it, but—PHP support is kind of a hot mess, isn't it? As much as I _get_ the experience of having this base code editor which you can then plugin your way into being whatever it is you want it to be, I'm also kind of tired of feeling like I'm building my own code editor on the fly every time I open it up and discover this one other thing that doesn't quite work the way I need it to.

The final straw's been when—I work in Drupal 7 still, a lot, and so I do a lot of template structured stuff; `<?php if ($foo): ?>` kind of stuff. And for some reason formatting all those *.tpl.php files has become the absolute bane of my existence. Nothing is quite working to the point where the style I had going into the file is the style I have going out of the file; indents are off and nesting levels are off and all sorts of little things are just going “I dunno, let's try it like this!" The tipping point's been when I think I finally got everything working right, except for whatever reason the editor, when I try to format the file, is sticking a space between the closing parenthesis and the colon up there in the alternate control structure syntax. I got as far as the editor putting the space in there, but then telling me it shouldn't be there, at which point I almost Ron Swanson'ed my laptop into the trash bin.

I know there's going to be a certain amount of churn when it comes to getting a new environment up and running, but at some point when you realize you're thinking you might have to learn how to script the browser yourself to do a basic task that just kind of worked somewhere else, maybe this isn't the best use of one's time. So I'm hoping reinstalling PhpStorm gets me back and running without having to think about this stuff anymore. Since I made the switch my organization upgrades me to an Apple silicon MacBook, and I'm hoping against hope maybe the new machine will handle better whatever the older machine couldn't. I'm also debating just moving my main Drupal project back into PhpStorm and leaving everything else back in VS Code, because there's definitely things I like about VS Code that PhpStorm doesn't seem to offer, but then also the thought of running two code editors and trying to keep my keyboard shortcuts in sync feels like a recipe for nightmares, too. 

Long story short: I don't know!
