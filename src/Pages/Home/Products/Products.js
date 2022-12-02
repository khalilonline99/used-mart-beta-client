import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const productsFromCategory = useLoaderData();
    // console.log(productsFromCategory);


    return (
        <div className='my-16 grid lg:grid-cols-3 grid-cols-1 '>
            {
                productsFromCategory.map(products => <ProductCard
                key={products._id}
                products={products}
                ></ProductCard>)
            }
        </div>
    );
};

export default Products;