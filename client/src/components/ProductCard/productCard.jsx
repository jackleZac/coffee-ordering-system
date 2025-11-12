import React, { useEffect, useState } from 'react';
import { SpinningCircles } from 'react-loading-icons';
import { AddItemToCart } from '../../redux/handleCart/AddItemToCart';
import { useDispatch } from 'react-redux';

const ProductCard = ({ _id, name, imageKey, description, category, price }) => {
    console.log('ProductCard _id:', _id);
    const [imageError, setImageError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [productImage, setProductImage] = useState(null);
    useEffect(() => {
        const importImage = async () => {
            try {
                const { default: img } = await import(`../../assets/${category}/${imageKey}.jpg`);
                setProductImage(img);
            } catch (error) {
                console.log(`Error loading image: ${error.message}`)
                setImageError(true);
            } finally {
                setLoading(false);
            }
        }

        importImage();
    }, [imageKey]);

    return (
        <div className="relative px-2 py-4 mx-2 my-3 w-60 h-fit bg-white shadow-md max-sm:w-72 max-sm:mx-auto">
            {loading ? (<p>Loading...</p>) : ( 
            <div>
                <div className="image-card">
                    {imageError ? (<SpinningCircles className='bg-[#808080]'/>)
                    : (
                        <img 
                            src={productImage}
                            alt={name} 
                            style={{ width: '170px', height: '140px' }}
                            className="mx-auto mt-2"/>
                    )}
                </div>
                <div className="grid grid-col-1">
                    <div className="text-center">
                        <h1 className="py-2 text-sm">{name}</h1>
                        {!description ? <p className='h-8'></p> : <p className='h-8 text-center text-xs'>{description}</p>}
                    </div>
                    <div className="py-6">
                        <div className="text-center font-bold text-xl">${price.toFixed(2)}</div>
                    </div>
                    <div className="">
                        <AddItemToCart _id={_id} name={name} price={price} />
                    </div>
                </div> 
            </div>
            )}
        </div>
    );
};

export default ProductCard;
