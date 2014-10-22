# jQuery Reach Scroll [![Build Status](https://travis-ci.org/dhyegofernando/jquery-reach-scroll.svg?branch=master)](https://travis-ci.org/dhyegofernando/jquery-reach-scroll)

> Actually this plugin will not load new pages and append new elements, it only will work with jQuery events to warn you when the scroll reach the limit of the binder scroll. (Lightweight plugin ~ 3kb minified)

## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 7+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Getting started

Three quick start options are available:

* [Download latest release](https://github.com/dhyegofernando/jquery-reach-scroll/releases)
* Clone the repo: `git@github.com:dhyegofernando/jquery-reach-scroll.git`
* Install with [Bower](http://bower.io): `bower install jquery-reach-scroll`

## Setup

Use [Bower](http://bower.io) to fetch all dependencies:

```sh
$ bower install
```

Now you're ready to go!

## Usage

Create an element to be called:

```html
<ul id="my-list"></ul>
```

Include jQuery (1.7.0+):

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
```

Include JS:

```html
<script src="jquery.reach-scroll.min.js"></script>
```

Call the plugin:

```javascript
$("#my-list").reachScroll();
```

That's it!

## Options

Here's a list of available settings.

```javascript
$("#my-list").reachScroll({
  binder: $(window),
  pause: false,
  pauseIfOccurs: false,
  extraScrollPx: 0,
  onReached: function() {}
});
```

Attribute        | Type         | Default      | Description
---              | ---          | ---          | ---
`binder`         | *DOM/jQuery* | `$(window)`  | The element that will be bound to the scroll event.
`pause`          | *Boolean*    | `false`      | Defines the plugin status.
`pauseIfOccurs`  | *Boolean*    | `false`      | Whether the plugin will be pause after the first reached event.
`extraScrollPx`  | *Integer*    | `0`          | Extra pixels before reach limit of the binder.
`onReached`      | *Function*   | `null`       | Function that will be called as event listener on limit of the binder.

You can also set the reached event like that if you prefer:

```javascript
$("#my-list").on("scrollreached", function() {});
```

## Structure

The basic structure of the project is given in the following way:

```
.
|-- demo/
|   |-- css
|   |-- js
|   |-- index.html
|-- dist/
|   |-- jquery.reach-scroll.js
|   |-- jquery.reach-scroll.min.js
|-- src/
|   |-- jquery.reach-scroll.js
|-- .editorconfig
|-- .gitignore
|-- .jshintrc
|-- .travis.yml
|-- bower.json
|-- CONTRIBUTING.md
|-- Gruntfile.js
|-- reach-scroll.jquery.json
|-- package.json
`-- README.md
```

#### bower_components/

Contains all dependencies like jQuery.

#### [demo/](https://github.com/dhyegofernando/jquery-reach-scroll/tree/master/demo)

Contains a simple HTML file to demonstrate the plugin.

#### [dist/](https://github.com/dhyegofernando/jquery-reach-scroll/tree/master/dist)

This is where the generated files are stored once Grunt runs JSHint and other stuff.

#### [src/](https://github.com/dhyegofernando/jquery-reach-scroll/tree/master/src)

Contains the files responsible for the plugin.

#### [.editorconfig](https://github.com/dhyegofernando/jquery-reach-scroll/tree/master/.editorconfig)

This file is for unifying the coding style for different editors and IDEs.

> Check [editorconfig.org](http://editorconfig.org) if you haven't heard about this project yet.

#### [.gitignore](https://github.com/dhyegofernando/jquery-reach-scroll/tree/master/.gitignore)

List of files that we don't want Git to track.

> Check this [Git Ignoring Files Guide](https://help.github.com/articles/ignoring-files) for more details.

#### [.jshintrc](https://github.com/dhyegofernando/jquery-reach-scroll/tree/master/.jshintrc)

List of rules used by JSHint to detect errors and potential problems in JavaScript.

> Check [jshint.com](http://jshint.com/about/) if you haven't heard about this project yet.

#### [.travis.yml](https://github.com/dhyegofernando/jquery-reach-scroll/tree/master/.travis.yml)

Definitions for continous integration using Travis.

> Check [travis-ci.org](http://about.travis-ci.org/) if you haven't heard about this project yet.

#### [reach-scroll.jquery.json](https://github.com/dhyegofernando/jquery-reach-scroll/tree/master/reach-scroll.jquery.json)

Package manifest file used to publish plugins in jQuery Plugin Registry.

> Check this [Package Manifest Guide](http://plugins.jquery.com/docs/package-manifest/) for more details.

#### [Gruntfile.js](https://github.com/dhyegofernando/jquery-reach-scroll/tree/master/Gruntfile.js)

Contains all automated tasks using Grunt.

> Check [gruntjs.com](http://gruntjs.com) if you haven't heard about this project yet.

#### [package.json](https://github.com/dhyegofernando/jquery-reach-scroll/tree/master/package.json)

Specify all dependencies loaded via Node.JS.

> Check [NPM](https://npmjs.org/doc/json.html) for more details.

**Have you used this plugin in your project?**

Let me know! Send a [tweet](http://twitter.com/dhyegofernando) or [pull request](https://github.com/dhyegofernando/jquery-reach-scroll/pull/new/master) and I'll add it here :)

## Alternatives

**Do you prefer a version with add elements feature or pagination?**

No problem, [@paulirish](https://github.com/paulirish) already did one. Check [his fork](https://github.com/paulirish/infinite-scroll)!

## Contributing

Check [CONTRIBUTING.md](https://github.com/dhyegofernando/jquery-reach-scroll/blob/master/CONTRIBUTING.md).

## History

Check [Releases](https://github.com/dhyegofernando/jquery-reach-scroll/releases) for detailed changelog.

## Credits

Built on top of [jQuery Boilerplate](http://jqueryboilerplate.com).

## License

[MIT License](http://dhyegofernando.mit-license.org/) © Dhyego Fernando
