// eslint-disable-next-line no-unused-vars
import React from 'react';
import App from './App';
import Profile from './Profile';
import Spinach from './Spinach';
import Popeye from './Popeye';
import Dynamic from './Dynamic';
import DefaultProfile from './DefaultProfile';
import ErrorPage from './ErrorPage';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'profile',
        element: <Profile />,
        children: [
            { index: true, element: <DefaultProfile /> },
            { path: 'spinach', element: <Spinach /> },
            { path: 'popeye', element: <Popeye /> },
        ],
    },
    {
        path: 'dynamic/:name',
        element: <Dynamic />,
    },
];

export default routes;
