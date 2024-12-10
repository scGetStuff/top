// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>Oh no, this route doesn&apos;t exist!</h1>
            <Link to="/">
                You can go back to the home page by clicking here, though!
            </Link>
        </div>
    );
};

export default ErrorPage;
