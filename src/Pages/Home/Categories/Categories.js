import React, { useEffect, useState } from 'react';
import CategoryCards from './CategoryCards';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://used-mart-server.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    
    return (
        <div className='my-24'>
            <h2 className="font-bold text-2xl text-center">All Categories</h2>
            <div className='flex flex-wrap mx-auto'>
                {
                    categories.map (category => <CategoryCards
                    key={category._id}
                    categoryName={category}
                    ></CategoryCards>)
                }
            </div>
        </div>
    );
};

export default Categories;