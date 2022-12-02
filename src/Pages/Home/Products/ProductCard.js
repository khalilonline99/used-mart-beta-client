import React, { useState } from 'react';

const ProductCard = ({ products }) => {
    const [toast, setToast] = useState(false);

    const { model,
        location,
        description,
        isVerified,
        originalPrice,
        resalePrice,
        picture,
        sellerName,
        yearOfUse } = products;

    const handleToastMessage = () => {
        setToast(true);
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="mobile" /></figure>
            <div className="card-body">
                <h2 className="card-title">Model: {model}</h2>
                <p className='text-left'>Description: {description.slice(0, 60)}...</p>
                <p className='text-left'>Location: {location}</p>
                <p className='text-left'>Resale Price: {resalePrice}</p>
                <p className='text-left'>Original Price: {originalPrice}</p>
                <p className='text-left'>Year of Use: {yearOfUse}</p>
                <p className='text-left'>Post Date: N/A</p>
                <p className='text-left'>Seller Name: {sellerName}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div> */}

                {/* modal start */}

                {/* The button to open modal */}
                <label htmlFor="bookNow-modal-productCard" className="btn btn-primary mt-2">Book Now</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="bookNow-modal-productCard" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h2 className='my-2 font-bold text-xl'>Order confirmation form</h2>
                        <div className='my-2'>
                            <p>Username:</p>
                            <p>email address:</p>
                            <p>item name: {model}</p>
                            <p>price: {resalePrice} </p>
                        </div>

                        <div>
                            <label>Phone Number: </label>
                            <input type="text" className='border' required />
                        </div>

                        <div className='mt-2'>
                            <label>Meeting Location: </label>
                            <input type="text" className='border' required />
                        </div>

                        <div className="modal-action">
                            <label htmlFor="bookNow-modal-productCard" className="btn" onClick={handleToastMessage}>Submit</label>
                        </div>
                    </div>
                </div>

                {/* modal ends */}
                {
                    toast ?
                        <div className="toast toast-center toast-middle">
                            <div className="alert alert-info">
                                <div>
                                    <span>New mail arrived.</span>
                                </div>
                            </div>
                            <div className="alert alert-success">
                                <div>
                                    <span>Message sent successfully.</span>
                                </div>
                            </div>
                        </div>
                        :
                        <></>
                }

            </div>
        </div>
    );
};

export default ProductCard;