import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../Blogs/Blogs';
import Home from '../Home/Home';
import Main from '../Layout/Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
]);

export default router;