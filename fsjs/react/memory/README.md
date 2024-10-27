# Project: Memory Card

https://www.theodinproject.com/lessons/node-path-react-new-memory-card

# Requirements

## UI

-   score section at top
-   grid of 12 images  
    maybe let them set the number?
-   I added buttons not specified, load & scramble  
    I don't like loading a bunch automatically

## Function

-   pull random set of images on load
-   displays the cards in a random order anytime a user clicks one

# TODO/notes

-   DOM manipulation?

    -   still unsure about my `updateImgs()` code  
         it's direct manipulation of img elements
    -   changing `innerHTML` is probably bad

-   images

    -   I want them in memory, not links  
         have to figure out how to read URL into memory and assign an `<img>` to a blob

    -   may need to style them so they shrink if needed for mobile  
        I did pick fixed width from Glphy, looks fine in dev tools

## giphy

-   had problems searching within a channel  
    I want it limited to https://giphy.com/rickandmorty/characters but it does not seem possible  
    `q=@rickandmorty+characters` looks for gifs with the word "characters"  
    no way to get to the "characters" child of the "rickandmorty" chanel
