import React from 'react';
import { useSelector } from 'react-redux';
import { itemsTotalPrice } from './CartSlice';

export const ShowTotalPrice = () => {
    const total = useSelector(itemsTotalPrice);
    console.log(total);
    return (
        <div className="w-full p-4 grid max-md:grid-cols-1">
          <div className="basis-1/2 text-lg">Delivery Fee: Free</div>
        <div className="basis-1/2 font-bold text-sm">Total: ${total}</div>
        </div>
    )
}
