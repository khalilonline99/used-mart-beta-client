import React from 'react';
import { Link } from 'react-router-dom';

const error404 = () => {
    return (
        <div className='my-64'>
            <h2 className='font-bold text-3xl'>Oops you have landed on a wrong page. Please return to <Link className='link' to='/'>Home</Link> </h2>
        </div>
    );
};

export default error404;