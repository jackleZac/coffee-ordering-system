import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { itemsInCart } from "../../redux/handleCart/CartSlice";
import { IoCartOutline } from "react-icons/io5";


export const CartBtn = () => {
    // Hide cart by default
    const [cartMobile, setCartMobile] = useState(false);
    // Set quantity of items to null
    const [itemQty, setItemQty] = useState(null);

    // Retrieve existing items in a cart
    const items = useSelector(itemsInCart);
    // Count quantity of items in a cart
    useEffect(() => {
        setItemQty(items.length);
        console.log(itemQty)
    }, [items])

    const handleCartMobile = () => {
        cartMobile ? (
        setCartMobile(false)) 
        : (setCartMobile(true))
    }
    return (
        <div className="lg:hidden">
            <button 
                className="fixed right-4 bottom-6 p-2 text-4xl bg-white rounded-2xl shadow-lg"><IoCartOutline /></button>
        </div>
  )
}
