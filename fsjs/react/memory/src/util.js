// @ts-ignore
const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const GIPHY_SEARCH_URL = 'https://api.giphy.com/v1/gifs/search';
// beta key is limited to 50
const IMG_POOL_SIZE = 100;
const IMG_SET_SIZE = 12;
const imageMap = new Map();

// https://giphy.com/rickandmorty/characters
// according to the UI "@username + tag to search within a verified channel"
// the channel "@rickandmorty" has no tags, it does have 5 children
// the API gives no way to select children

async function loadImages(setMessage) {
    // offset : there were only 500 in rickandmory, 4999 limit according to docs
    const response = await fetch(
        `${GIPHY_SEARCH_URL}?api_key=${GIPHY_API_KEY}&q=@rickandmorty&limit=${IMG_POOL_SIZE}&offset:${rand(500 - IMG_SET_SIZE)}`,
        { mode: 'cors' },
    );
    const gifs = await response.json();

    // big dumb validation
    if (gifs.meta.status !== 200) {
        setMessage('<h1>Status is not 200</h1>');
        return;
    }
    if (gifs.data.length === 0) {
        setMessage('<h1>Empty gifs result</h1>');
        return;
    }
    if (gifs.data.length < IMG_SET_SIZE) {
        setMessage('<h1>Not enough gifs result</h1>');
        return;
    }

    // build subset of API result
    imageMap.clear();
    const indexes = randIndexes(IMG_SET_SIZE, gifs.data.length);
    indexes.forEach((n) => {
        const data = {
            url: gifs.data[n].images.fixed_width.url,
            // alt_text is empty for all the gifs, using title
            alt: gifs.data[n].title,
        };
        imageMap.set(gifs.data[n].id, data);
    });

    return imageMap;
}

function shuffleImages() {
    const keys = Array.from(imageMap.keys());
    const shuffleMap = new Map();

    const indexes = randIndexes(IMG_SET_SIZE, IMG_SET_SIZE);
    indexes.forEach((n) => {
        shuffleMap.set(keys[n], imageMap.get(keys[n]));
    });

    return shuffleMap;
}

// [0,max) for array indexes
function rand(max) {
    return Math.floor(Math.random() * max);
}

function randIndexes(count = 0, max = 0) {
    const indexes = new Set();
    while (indexes.size < count) indexes.add(rand(max));
    return indexes;
}

function isEmpty() {
    return imageMap.size === 0;
}

export { loadImages, shuffleImages, isEmpty, IMG_SET_SIZE };
