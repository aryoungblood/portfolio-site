---
title: Making a Blog
date: '2020-09-13'
summary: An overview of how I built this blog with Sapper, Svelte, and a couple of other useful tools.
---

A while back I made a decidedly better version of this site. For ages I'd relied on plain old HTML and CSS to make my personal site. It worked and was performant, but it was annoying to update. I decided to rebuild my site with [Sapper](https://sapper.svelte.dev/) in order to maintain a working and performant site that was less annoying to update. Now it's so easy to update that I've added a blog!

Sapper uses [Svelte](https://svelte.dev/), a JavaScript library that's great for interactive UIs. Svelte compiles code into vanilla JavaScript, which makes it easy to use Svelte just about anywhere. I first used Svelte when I built the front end for "[The Health and Economic Impacts of COVID-19 Interventions](https://www.rand.org/pubs/tools/TLA173-1/tool.html)," an interactive tool to help state and local policymakers make decisions about COVID-19 interventions. Svelte ended up being a fantastic choice for a project that needed to be turned around very quickly. Svelte was pretty easy to pick up because it's [well-documented](https://svelte.dev/docs) and it's designed in a way that feels intuitive.

So Svelte was an easy choice for my site. Since I was dealing with a whole site, rather than a single app, I wanted to have nice things like routing, the ability to create JSON endpoints, and SEO like I'd get from a server-rendered app. Sapper is Svelte's solution to these issues, so I tried it out. Like Svelte, it was pretty easy to get up and running thanks to its [good documentation](https://sapper.svelte.dev/docs). I also found it helpful to look at [Svelte's site setup](https://github.com/sveltejs/svelte/tree/master/site), which uses Sapper, on GitHub.

With the help of frontmatter parser [<code>front-matter</code>](https://github.com/jxson/front-matter) and markdown parser and compiler [<code>marked</code>](https://github.com/markedjs/marked), I created a setup that enables me to add new work to my portfolio with markdown files. I expanded on the same approach to create this blog. New blog posts are added with markdown files. My Sapper and Svelte code take care of the rest: routing, styling, indexing, etc.
