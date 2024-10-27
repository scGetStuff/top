/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect } from 'react';
import './Images.css';
import * as Util from '../util';

const emptyImgs = new Array(Util.IMG_SET_SIZE)
    .fill(0)
    .map((x, i) => <img src="" data-id="" alt="" key={i}></img>);

function Images({ updateScore }) {
    // console.log('Render Images');

    const picked = useRef(new Set());
    const messages = useRef(null);

    // TODO: I still think I'm doing something wrong
    // the img elements are being updated, so useRef seems inappropriate
    // probably need an array/map of img data as state that would be used to set props of img elements
    const imgContainer = useRef(null);

    function updateImgs(map = new Map()) {
        const imgs = imgContainer.current.children;

        if (imgs.length !== Util.IMG_SET_SIZE) {
            setMessage(`<h1>Something bad happened</h1>`);
            return;
        }

        let idx = 0;
        map.forEach((value, key) => {
            const pic = imgs[idx];
            pic.dataset.id = key;
            pic.src = value.url;
            pic.alt = value.alt;
            idx++;
        });
    }

    async function load() {
        clear();
        const imageMap = await Util.loadImages(setMessage);
        updateImgs(imageMap);
    }

    function reset() {
        clear();
        shuffle();
    }

    function clear() {
        picked.current.clear();
        setMessage();
        updateScore(0);
    }

    function shuffle() {
        const imageMap = Util.shuffleImages();
        updateImgs(imageMap);
    }

    function imageClicked(event) {
        // filter out useless clicks
        if (event.target.tagName !== 'IMG') return;

        // loser
        if (picked.current.has(event.target.dataset.id)) {
            // eslint-disable-next-line no-unused-vars
            // const thisIsWhatIWantToWork = () => (
            //     <>
            //         <h1>You Lose!</h1>
            //         <div>hit the Reset button loser</div>
            //     </>
            // );
            // test(thisIsWhatIWantToWork);
            setMessage(`
                <h1>You Lose!</h1>
                <div>hit the Reset button loser</div>`);
            return;
        }

        picked.current.add(event.target.dataset.id);
        updateScore(event.target.dataset.id);

        // winner
        if (picked.current.size === Util.IMG_SET_SIZE) {
            // eslint-disable-next-line no-unused-vars
            // const thisIsWhatIWantToWork = () => (
            //     <>
            //         <h1>You Win!</h1>
            //         <div>hit a button to do stuff</div>
            //     </>
            // );
            // test(thisIsWhatIWantToWork);
            setMessage(`
                <h1>You Win!</h1>
                <div>hit a button to do stuff</div>`);
            return;
        }

        shuffle();
    }

    function setMessage(s = '') {
        if (s === '') imgContainer.current.classList.remove('hide');
        else imgContainer.current.classList.add('hide');

        // TODO: is changing innerHTML of ref variable ok?
        // there is no exposure to XSS, so no dangerouslySetInnerHTML
        messages.current.innerHTML = s;
    }

    // I kind of got React fragment to work, but it only rendered the last line of the fragment
    // also I call this from regular JS code, so no fragment there

    // const [msg, setMsg] = useState(() => (
    //     <>
    //         <h1>Load button to start</h1>
    //     </>
    // ));
    // function test(
    //     f = () => (
    //         <>
    //             <h1>Update</h1>
    //         </>
    //     ),
    // ) {
    //     imgContainer.current.classList.add('hide');
    //     setMsg(f);
    // }

    return (
        <>
            <div className="imgs-buttons">
                <button onClick={load}>Load new images</button>
                <button onClick={reset} disabled={Util.isEmpty()}>
                    Reset existing images
                </button>
            </div>

            <div id="imgs_message" className="imgs-message" ref={messages}>
                <h1>Load button to start</h1>
            </div>

            {/* <div id="test" className="imgs-message">
                {msg}
            </div> */}

            <div
                id="imgs_container"
                className="imgs-container"
                ref={imgContainer}
                onClick={imageClicked}
            >
                {emptyImgs}
            </div>
        </>
    );
}

export default Images;
