import React, { useEffect, useState } from 'react';

const Image = () => {
    const [imageURL, setImageURL] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.org/posts', { mode: 'cors' })
            .then((response) => response.json())
            .then((response) => setImageURL(response[2].image))
            .catch((error) => console.error(error));
    }, []);

    return (
        imageURL && (
            <>
                <hr />
                <h1>An image</h1>
                <img src={imageURL} alt={'placeholder text'} />
                <hr />
            </>
        )
    );
};

export default Image;
