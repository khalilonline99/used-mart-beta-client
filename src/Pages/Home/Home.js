import React from 'react';
import Advertisement from './Advetisement/Advertisement';
import Categories from './Categories/Categories';
import Hero from './Hero';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='mx-auto'>
            {/* hero */}
            <Hero></Hero>

            {/* adv */}
            <Advertisement></Advertisement>

            {/* all categories */}
            <Categories></Categories>

            {/* testimonials */}
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;