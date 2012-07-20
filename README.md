# Live Code

Live code is a jQuery plug-in to allow you to added editable code regions to your
site.

## Setup

All you need to do to setup the library is have a copy of jQuery as long as the
plugin code.

``` js
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="jquery.livecode.min.js"></script>
```

## HTML

You will need to do a few things in your html to get the plugin to pick up your
live coding area.

First you will want to setup a "code" area and give it a data-live-code="SELECTOR"
attribute.

``` html
<pre><code data-live-code="#example">CONTENT</code></pre>
```

Then you will want to set a div on your page with an id of example

``` html
<div id="example"></div>
```

## CSS and JS

You live code any html tag, so to edit CSS and JS you will just need to change the
targets to style and script elements respectively.

``` html
<style type="text/css" id="exampleCSS"></style>
<pre><code data-live-code="#exampleCSS">STYLES HERE</code></pre>

<script id="exampleJS"></script>
<pre><code data-live-code="#exampleJS">SCRIPT HERE</code></pre>
```

## Activate

Once you have all of you html setup, you will need activate the plugin.

Put the following code near the bottom of the page or wrapped in a
`$(document).ready()` call.

``` js
$.livecode();
```

The livecode script will take over from there.

## Callback

You can invoke a callback when an area is updated (`blur` by default).

The callback function will get the DOMElement of the area that was edited.

``` js
$.livecode({
	callback: awesomeCallbackFunction
});
```

## Highlight.js

This library works very well with [highlight.js](http://softwaremaniacs.org/soft/highlight/en/)
for syntax highlighting your code areas!

Just include the highlight.js and highlight theme and add in a callback.

``` js
$.livecode({
	callback: hljs.highlightBlock
});
```

## Demo

See demo.html in this repo for a very simplified demo.

----

Developed by [Dave Widmer](http://www.davewidmer.net)

