import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCards = ({ categoryName }) => {
    const { _id, category, picture } = categoryName;

    // console.log(categoryName);
    return (
        <Link to={`/categories/${category}`} className="rounded w-30 bg-base-100 shadow-2xl mx-auto my-6 p-3">
            <figure><img src={picture} alt="used mobiles" /></figure>
            <h2 className="font-bold text-center text-xl">{category.toUpperCase()}</h2>
        </Link>
    );
};

export default CategoryCards;