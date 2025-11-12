import { useState, useEffect } from "react";
import axios from "axios";
import  ProductList  from "../components/ProductCard/ProductList";
import { useSelector } from "react-redux";
import { itemsInCart } from "../redux/handleCart/CartSlice";
import { Cart } from "../components/Cart/Cart";
import { IoCartOutline } from "react-icons/io5";
import { VscCoffee } from "react-icons/vsc";
import { GiTacos } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";

function Menu() {
  const [Menu, setMenu] = useState([]);
  const [filter, setFilter] = useState(null);
  const [cartMobile, setCartMobile] = useState(false);
  const [cartQty, countCartQty] = useState(0);

  // Use server URL from environment variables
  const SERVER_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:8080';

  console.log("Server URL:", SERVER_URL);
  // Retrieve and display available menu
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = filter
          ? await axios.get(`${SERVER_URL}/menu/${filter}`)
          : await axios.get(`${SERVER_URL}/menu`);

          setMenu(response.data);
          console.log(response.data);
      } catch (error) {
        console.log(error)
      }
    } 
    fetchData();
  }, [filter]);

  // Retrieve and display number of items in cart
  const items = useSelector(itemsInCart);
  useEffect(() => {
    const updateCartQty = () => {
      let initialQty = 0;
      for (const item of items) {
        initialQty += item.quantity;
      }
      countCartQty(initialQty)
    }
    updateCartQty();
  }, [items])
  
  const handleFilter = (id) => {
    setFilter(id);
  };
  
  const handleCartMobile = () => {
    cartMobile ? (setCartMobile(false)) :(setCartMobile(true))
  }

  return (
    <div className="pt-24 bg-[#f5f5ef]">
      <div className="flex lg:flex-row max-md:flex-col">
        <div className="w-auto md:w-full max-md:mt-32">
          <ProductList products={Menu} />
        </div>
        <div className="w-2/5">
          <div className="max-md:fixed max-md:w-full max-md:top-24">
            <div className="m-2 bg-white shadow-lg flex flex-col border-1 rounded-lg">
              <h2 className="m-2 font-bold text-center text-xl">MENU</h2>
              <div className="m-2 border-2 rounded-lg flex flex-col max-md:flex-row">
                <button className="p-2 w-full hover:bg-slate-200 flex flex-row" onClick={() => handleFilter(null)}><IoFastFoodOutline className="mx-2"/><p>ALL MENU</p></button>
                <button className="p-2 w-full hover:bg-slate-200 flex flex-row" onClick={() => handleFilter("coffee")}><VscCoffee className="mx-2"/><p>COFFEE</p></button>
                <button className="p-2 w-full hover:bg-slate-200 flex flex-row" onClick={() => handleFilter("meals")}><GiTacos className="mx-2"/><p>WRAPS</p></button>
              </div>
            </div>
          </div>
          <div>
            <div className={`max-md:fixed top-28 ${cartMobile ? 'left-0':'-left-[100%]'} w-full h-screen transition-all duration-700`}>
              <Cart />
            </div>
            <div className="lg:hidden fixed bottom-6 right-2">
              <div className="relative">
                <button className="p-2 text-4xl bg-white rounded-2xl shadow-lg"
                  onClick={() => handleCartMobile()}><IoCartOutline /></button>
                <div className="absolute -top-2 -left-4 p-1 px-2 text-white text-xs bg-[#373333] rounded-2xl">{cartQty}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;