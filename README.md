# Hometap

A web app that submits a form and calls an API for validation.

## Run it locally

This is a React application which runs locally on 3000.

    $ git clone https://github.com/wzamites/hometap/
    $ cd hometap
    $ npm install
    $ npm start

## Component Architecture

There are two React components that matter: App.js, and Form.js.

### App.js

This file contains the pages for both the form, and the success page after submission, controlled by React Router. These two pages need to subscribe to the same state, so that's why the state of each input field lives in App.js.

### Form.js
Form is the name of the component being exported, although Form.js contains helper components. The onChange prop calls handleChange in App.js, and updates the state there.

#### handleSubmit()
I'm using an asynchronous promise called fetch(), a browser API, to make a GET request to `https://www.zipcodeapi.com/`, an endpoint that returns an array of valid zip codes for a given city and state.
In the promise chain, I use the includes() method to return a boolean indicating whether the zip code submitted is valid for that city and state. The include() method is O(n) but the most zip codes in a single city is only about 220 (Los Angeles, CA) so it's negligible.

## What I didn't do

- Calling an alert isn't the best way to validate a form, and it's not called for in the style guide. Something like `event.target.setCustomValidity("This zip code doesn't match this address")`, then styling that according to the guide would do the trick.
- Check boxes are hard to style, so I copied styling directly from w3. It's not exactly what the style guide calls for but it's closer than the default.
- The API call can be slow. I didn't register the app and I didn't deal with CORS etc, so I'm using a proxy for now to get around that problem. I don't have any spinners etc. to let the user know that a call is in progress.
- The styling of the forms is pretty close in Chrome and Firefox, but the CSS states aren't right (:focus, :disabled, etc).
