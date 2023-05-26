---
title: ...about creating custom extension packs in VSCode
draft: false
date: 2023-02-01T10:18:26-05:00
tags:
  - vscode
---
A couple months ago I made the switch to VS Code from PhpStorm after resisting the tides of history for so long, after finally getting tired of every new PhpStorm update bringing new ways for the app to crash randomly. It's taken a bit to get used to Code and how workspaces work, but I've finally found the answer to something that's been bothering me for a while.

I bounce around different projects quite a bit and so I don't need every extension enabled in every workspace. (I'm looking at you, Drupal/PHP extensions.) Turning them off every time I open up a fresh new workspace was a chore (I mean, a minor one, sure, but) and I finally got to wondering if there wasn't a way to make that easier, somehow.

Turns out, there is: [create a custom extension pack]([https://gist.github.com/ddoomm/e37814feab80730d9f8defc02bd95327](https://gist.github.com/ddoomm/e37814feab80730d9f8defc02bd95327)), load it up with whatever you want to group together, then sit there disabling and reenabling the pack over and over until it's time to remember why you booted up Code in the first place.
