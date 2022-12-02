import React from 'react';
import Advertisement from './Advetisement/Advertisement';
import Hero from './Hero';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Advertisement></Advertisement>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;