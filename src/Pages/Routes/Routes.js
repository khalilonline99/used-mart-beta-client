import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../Blogs/Blogs';
import Home from '../Home/Home';
import Main from '../Layout/Main';
import Error404 from '../Error404/Error404';
import Products from '../Home/Products/Products';


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
            },
            {
                path: '/categories/:id',
                element: <Products></Products>,
                loader: ({params}) => {return fetch(`http://localhost:5000/categories/${params.id}`)}
            },
            {
                path: '*',
                element: <Error404></Error404>
            }
        ]
    },
]);

export default router;