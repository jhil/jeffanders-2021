---
layout: post
category: post
title: "Your company needs a tools guide"
date: 2016-01-04
thumb: your-company-needs-a-tools-guide.jpg
hero: tools-header.png
color: "#6199FD"
---

## Design, dev, and ops all in one doc

Here at Minimill, we’ve only made one hire but have put significant consideration into our team onboarding — and it’s been one of our best time investments yet! My partner Dan and I spent an evening writing a tools guide so that Amritha, our new PM, could immediately acclimate to our ops and design-dev workflow. This gave us confidence that our new team member could perform seamlessly with existing processes. No more wasting time correcting mistakes caused by miscommunication!

I’ve been in jobs where I was only informed of certain tools weeks or months into my tenure — tools that could have made me more efficient. That’s the nature of a busy company, and exactly why creating a tools guide is essential for employee onboarding. It helps new team members pick up software at their own pace and provides a neat agenda for first-day walkthroughs. This is useful for experienced team members, as well, to learn about new tools outside of their immediate domain.

If you don’t already have a wiki, no problem — just take an hour to throw it all in a Google Doc (and maybe another hour every couple months to update it as workflows evolve).

Here is the content from our quick tools guide so you can see how one can be organized (and also get an inside peek at our setup).

# Minimill Tools Guide

{% include i.html src="minimill-logo.png" %}

## Organizational Tools

Everyone on the team uses these to stay in sync.

### Slack

By default, all communication should happen over Slack in our various channels. All project channels begin with `“p-”`, and all side project channels begin with `“sp-”` so that they’re sorted nicely in the sidebar. We also might choose to invite clients as Single-Channel Guests to a private group in our Slack if we think it will make our communication more open and effective.

### Trello

Trello stores our tasks. If someone has a task they should perform, it should be in Trello. The only exceptions to this are tasks related to the coding or design of a specific project. These tasks should be documented instead on GitHub and Zeplin respectively.

### GitHub

GitHub stores all our code, and issues related to them. Use issues liberally, for anything and everything related to the code implementation of a project or side project. All public repositories should have an up-to-date README.md file.

### Google Apps

We pay for Google Apps for Business, which allows us to log into @minimill.co emails. It also powers our Gmail, Google Calendar, and Google Drive.

### Google Calendar

All meetings, both internal and with clients, should be on our Minimill Google Calendar.

### Email

We should use email exclusively for interfacing with clients and for signing up for web services. In general, most all client interactions should CC team@minimill.co, which has our entire team on it. All intra-team communication should be sent over Slack.

### Google Drive

All documents should live in Google Drive. This includes everything from our financial records to project brainstorms. Note that while we use Dropbox, all text documents should be kept on our Google Drive.

### Dropbox

All design assets — for projects, side projects, or for our company — should be stored in Dropbox. Other things live here too, like contracts and other static files. Dropbox generally has better syncing and conflict management than Drive, which is why we use it for files, but Dropbox Paper isn’t quite ready for us to use with clients. All collaborative documents — notes, spreadsheets, call minutes — should be stored in Google Drive.

### HelloSign

Whenever we need a client to sign a document, we use HelloSign. Simply log in, upload a document, mark the signature / date locations, and then HelloSign will send an email to all parties and update us as they view / sign the document.

### Microsoft Word / Apple Pages

We use Word or Pages to create and edit documents and contracts. This makes it easy for any team member to edit the documents. It also allows us to use our company typeface, Calibre, for additional branding in documents.

### Giphy

GIFs are life. Have fun 😜

## Design & Development Pipeline

We use custom internal tools and publicly available software to optimize the handoff between design and development. This is often the biggest bottleneck in any workflow, but with these tools we are able to move fast and collaborate effectively internally and with our clients.

### Zeplin

Zeplin is where we host designs for feedback / development. Zeplin specs out designs by outlining dimensions, colors, fonts, and other details from Sketch to make development easier. Any issue related to a design should be logged in a comment directly on the design in Zeplin.

### Cerberus

Cerberus is a static website hosting platform built by us, hosted at work.minimill.co. Every project will have it’s own link, which is password protected. We can use this link to share a project with a client, or to view the development progress.

### Spire

Spire is an hyper-minimal inspiration board built by us, hosted at spire.minimill.co (still in Alpha). Use it to collect visual inspiration for a project and sync up around ideas for style.

## Development Tools

Dan leads development. Here are the tools for building the web front- and back-end of our projects.

### Sublime Text

Sublime Text is the text editor we use for writing code.

### Gulp

Gulp is the build tool we use for development of our website. It organizes all of the development tooling we use in one place.

*Why do we need Gulp?*

Gulp is a tool that makes a developer’s life easier. Instead of editing each individual source file separately, it allow us to use SCSS and Handlebars.js to edit higher-level macros and abstractions. This allows for cleaner, more modular code that is easier for our clients to adapt to their needs.

*What is a build tool?*

Build tools like Gulp transform source files into a static website. There are many tedious transformations that must happen in order to convert the easy-to-edit source files (.hbs and .scss) into their final form (.html and .css). With one command, all changes in source files will be carried over into the static website.

*What features does Gulp expose for us?*

- SCSS to CSS (see below)
- Handlebars.js with Yaml data (see below)
- CSS Auto-prefixing: ensures that all of our CSS is cross-browser compatible.
- Browsersync: is a development tool that will reload the web browser automatically whenever source files are edited.
- Imagemin: compresses and optimizes images for better performance.
- Linting (SCSS, JS): ensures that our CSS and JavaScript is properly formatted and conforms to a common code style guide.
- Minification (HTML, CSS, JS): automatically compresses all of our code, for faster page load times.

### SCSS

SCSS is a CSS extension language, that makes CSS easier to read and write. It encourages modularity and readability.

### Handlebars.js

Handlebars.js is a templating language that makes writing HTML easier to read and write. It allows the creation of “partials”: small snippets of HTML that can be repeated around. For example, instead of writing out the same HTML for six different testimonials, Handlebars.js allows us to write a single partial for a testimonial, and paste it six different places.

## Design Tools

Jeff leads design. These help us build mockups and prototypes to share ideas with clients and inform development.

### Sketch

Sketch is a new piece of design software from Bohemian Coding. We use this as the primary tool for user interface (UI) design. One of the great parts of Sketch is its plugin support. We use plugins for small workflow processes and notably Zeplin for speccing.

### Illustrator

Adobe Illustrator CC is our primary tool for graphics. While Sketch is great at laying out elements, its vector software is less powerful than Adobe’s. Logo design and illustrations happen in Illustrator and are often imported into the other tools for further processing.

### Photoshop

We use Adobe Photoshop CC primarily for making photorealistic mockups. For example, we can place a screenshot of an interface created in Sketch into a monitor to help clients visualize the final product. We also use it for photo editing, but UI design should never ever be done in PS! While software like Illustrator is a vector editing tool, Photoshop is a raster editing tool for files like PNG, JPG, and GIF.

### After Effects

Adobe After Effects CC is used for motion graphics. This can help visualize web/mobile interactions or create animated GIFs of more static content for sharing on Dribbble and beyond.

### InDesign

Adobe InDesign CC is a piece of software somewhere in between Illustrator and Photoshop in that it effectively manages vector and raster content. It is made for laying out content for publications like newspapers or e-books. We primarily use InDesign for making decks to present brands or make proposals.

### Social Networks

Our company has a few channels to share our work publicly.

### Dribbble

Our public face in the design world. We’re minimill on Dribbble.

### GitHub

Our public face in the dev world. We’re minimill on GitHub.

### Twitter

We don’t tweet much, but we should! We’re @minimill_co on twitter.

### Facebook

Great for making announcements to our friends / family, and important to keep up to date, but we don’t post much right now. We’re minimillco on Facebook.

### Website

We have a teaser page up now at minimill.co, but will be releasing our full portfolio in January. This will help us display our work and generate new leads.
