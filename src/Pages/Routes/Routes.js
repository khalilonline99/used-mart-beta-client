import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../Blogs/Blogs';
import Home from '../Home/Home';
import Main from '../Layout/Main';
import Error404 from '../Error404/Error404';
import Products from '../Home/Products/Products';
import Login from '../Login/Login';
import Register from '../Register/Register';


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
                loader: ({params}) => {return fetch(`https://used-mart-server.vercel.app/categories/${params.id}`)}
            },
            {
                path: '/login',
                element: <Login></Login>
                
            },
            {
                path: '/register',
                element: <Register></Register>
                
            },
            {
                path: '*',
                element: <Error404></Error404>
            }
        ]
    },
]);

export default router;