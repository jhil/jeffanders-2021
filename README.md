[![Netlify Status](https://api.netlify.com/api/v1/badges/68ae56f0-82a5-4171-94a9-a37579a66a92/deploy-status)](https://app.netlify.com/sites/jhilco-2021/deploys)

## Setup

Install [yarn][yarn-install]. Then, install gulp:

```bash
yarn global add gulp  # May require `sudo`
```

Finally, install [ImageMagick][imagemagick]. You have done so successfully if you can run 

```bash
convert -help
```

without any errors.

## Usage

### Developing

```bash
yarn                   # One time
bundle install         # One time
gulp serve
```

### A Note on Directory Structure and Compilation

Because Gulp and Jekyll to not play nice historically, static assets need to be generated into two different folders:

* SCSS source files live in `_scss/` and compile to both  `css/` and `_site/css/` 
* JavaScript source files live in `_js/` and compile to both  `js/` and `_site/js/`

> **Note:** the root level `css/`, `js/`, and `img/` folders are in the `.gitignore` and are regularly deleted.  **Modifications to these folders may be lost without warning!** Instead, edit source files in the corresponding underscore-prefixed folders.

## Gulp Commands

An overview of Gulp commands available:

### `gulp build`

Builds the site into the `dist` directory.  This includes:

- SCSS w/ linting, sourcemaps and autoprefixing
- JS linting and uglification
- Image optimization and resizing

### `gulp build:optimized`

This is used for distributing an optimized version of the site (for deployment).  It includes everything from `gulp build` as well as:
- SCSS minification
- CSS / JS inline-sourcing 
- more rigorous image optimization

### `gulp responsive`

Resizes images in the `_img/res/raw` directory into `_img/res/<size>` directories, for several different heights in pixels (default: 20, 400, 800, 1600).

### `gulp watch`

Watchs for changes in local files and rebuilds parts of the site as necessary, into the `dist` directory.

### `gulp serve`

Runs `gulp watch` in the background, and serves the `dist` directory at `localhost:3000` with automatic reloading using [Browsersync][browsersync].

## Structure

```bash
├── img/              # All images that will be hosted statically.
├── _includes/        # Jekyll HTML includes
├── _js/              # JavaScript libraries and scripts, pre-compilation
├── _layouts/         # Jekyll HTML layouts
├── _posts/           # Jekyll HTML/Markdown posts
├── _scss/            # Stylesheets, pre-compliation
├── _site/            # GENERATED Jekyll builds the site into this directory
├── css/              # GENERATED Gulp builds SCSS into this directory
├── js/               # GENERATED Gulp builds JS into this directory
├── img/              # GENERATED Gulp builds images into this directory
├── node_modules/     # GENERATED NPM installs JS modules here.
├── _config.yml       # Metadata associated with the site.
├── Gulpfile.js       # Controls Gulp, used for building the website
├── index.html        # The root HTML file for the website
├── LICENSE.md        # This project's license
├── package.json      # Dependencies
└── README.md         # This file
```

[autoprefixer]: https://css-tricks.com/autoprefixer/
[browsersync]: https://www.browsersync.io/
[cssnano]: https://cssnano.co/
[gulp]: https://gulpjs.com/
[handlebars]: https://handlebarsjs.com/
[htmlmin]: https://github.com/kangax/html-minifier
[imagemin]: https://github.com/imagemin/imagemin
[jscs]: https://jscs.info/
[jshint]: https://jshint.com/
[linting]: https://en.wikipedia.org/wiki/Lint_%28software%29
[npm-install]: https://nodejs.org/en/download/
[uglifyjs]: https://github.com/mishoo/UglifyJS
[scss]: https://sass-lang.com/
[scss-lint]: https://github.com/brigade/scss-lint
[jekyll]: https://jekyllrb.com/
[imagemagick]: https://www.imagemagick.org/script/index.php
