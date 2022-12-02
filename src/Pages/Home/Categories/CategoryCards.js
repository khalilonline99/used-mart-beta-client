import React from 'react';

const CategoryCards = ({categoryName}) => {
    const {_id, category, picture} = categoryName;

    console.log(categoryName);
    return (
        <div className="rounded w-30 bg-base-100 shadow-2xl mx-auto my-6 p-3">
            <figure><img src={picture} alt="used mobiles" /></figure>
                <h2 className="font-bold text-center text-xl">{category.toUpperCase()}</h2>
        </div>
    );
};

export default CategoryCards;