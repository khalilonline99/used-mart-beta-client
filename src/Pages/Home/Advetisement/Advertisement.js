import React from 'react';
import AdvertisementCards from './AdvertisementCards';

const Advertisement = () => {
    return (
        <div className='my-16'>
            <h3 className='font-bold text-2xl text-center my-4' >Featured Items</h3>
            <div className='grid grid-cols-3'>
                <AdvertisementCards></AdvertisementCards>
                <AdvertisementCards></AdvertisementCards>
                <AdvertisementCards></AdvertisementCards>
            </div>
        </div>
    );
};

export default Advertisement;