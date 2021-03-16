# JS Mini Challenge: DOM Manipulation

## Instructions

Fork this repo, then run `git clone` to download your fork locally. Then `cd` into the downloaded directory and open it in your text editor with `code .`.

## Submitting

When you’re finished, run the following commands in your terminal to submit:

```
git add .
git commit -m 'Done'
git push
```

To get feedback on your code, make a [pull request from your forked repo](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork). If you worked with a partner, you can tag your partner on the pull request.

_______

## Assignment

Today, we'll be building a prototype of a small application about Raffy's trip to the Amazon Rainforest. If you're so inclined to do so, feel free to change the data and personalize your app!

There's a section in this Readme file for your notes on each deliverable. As you go through the deliverables, write down some notes in this file on how you solved each problem. It'll help reinforce what you learned and give you a head start next time you see a similar problem.

A note on notation: when you see an element like `h1#header` in the Readme, that refers to the element's tag name and the CSS selector. For example, `h1#header` looks like this in the HTML:

```html
<h1 id="header">Some text here</h1>
```

And `div.traveler` looks like this (note the CSS class selector syntax):

```html
<div class="traveler">
  <!-- child elements here -->
</div>
```
___________

## Deliverable 1

Open the `index.html` file in your browser and check the console in Chrome Dev Tools. You'll notice the console.log from line 2 of the `index.js` file is returning `null` instead of showing the `h1#header` element.

Figure out what you need to change to give Javascript access to the `h1#header` element.

**YOUR NOTES**
```

```
___________

## Deliverable 2

Now that you have access to the `h1#header` element, use Javascript to change the element's font color to your favorite color.

**YOUR NOTES**
```

```
___________

## Deliverable 3

Now that we've got a beautiful header, we can show some traveler data on the page. The traveler data is stored in a variable called `traveler` in the `data.js` file - you can still access that variable in your `index.js` file (see if you can figure out why!).

First, uncomment the `console.log` under Deliverable 3 in the `index.js` file to see the data in the console. 

Using the `traveler` object, update the DOM to show the traveler's *name*, *nickname*, and *photo* in the appropriate places. For the `<img>` tag, make sure to update the `src` attribute *and* the `alt` attribute (it's important for accessibility).

**YOUR NOTES**
```

```
___________

## Deliverable 4

We also want to show some of the awesome animal sightings our traveler had. You'll notice that within the `traveler` object, there's an `animalSightings` property that contains an array of animal sighting data. *For each* of the animal sightings, create a DOM element that looks like this and add it to the `ul#animals`:

```js
<li data-id="{animalSighting id}">
  <p>{animal sighting description}</p>
  <img src="{animal sighting photo}" alt="{animal sighting species}"/>
  <a href="{animal sighting link}" target="_blank">Here's a video about the {animal sighting species} species!</a>
</li>
```

**YOUR NOTES**
```

```

**NOTE**: The `data-id` attribute is a custom property known as a "dataset attribute". They're useful for adding additional data to the DOM that doesn't have any effect on CSS of what the user sees - they're purely meant as tools for Javascript developers. We'll use this `data-id` attribute in the next deliverable.

For more info on `data-*` attributes, have a look at this [MDN article on using dataset attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

___________

## Deliverable 5

Ruh-oh! Another traveler's animal sighting has snuck into our list. While it's certainly a great sighting, it doesn't belong on the list with the rest of Raffy's animal sightings. 

Since you gave each `<li>` a `data-id` attribute in the last deliverable, we can use that information to find the animal sighting we're looking for. 

Use Javascript to find the element with the `[data-id='3']` attribute, and *remove* that element from the page.

> Hint: You can use `querySelector` with [CSS Attribute Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) to find an element with a specific data-id. 

**YOUR NOTES**
```

```
