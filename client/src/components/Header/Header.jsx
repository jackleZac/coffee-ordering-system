import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Avatar from 'react-avatar';
import { MdArrowForwardIos } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import LOGO from "../../assets/artisanBrewsBrand.png";

let navigation = [
    { name: 'HOME', href: '/', current: false},
    { name: 'MENU', href: '/menu', current: false},
    { name: 'ABOUT US', href: '/about', current: false},
    { name: 'CONTACT US', href: '/contact', current: false}
]

export const Header = () => {
  // Check the current page
  let currentPath = useLocation();
  // Hide mobile navigation by default
  const [showMobileNav, setMobileNav] = useState(false);
  const handleMobileNav = () => {
    showMobileNav ? (
        setMobileNav(false)
    ) : (
        setMobileNav(true)
    )
  };

  return (
    <div>
        <header className="w-full h-24 z-30 fixed flex flex-row justify-between bg-[#373333]">
            <div className="text-white m-2 w-32">
                <img src={LOGO} />
            </div>
            <div className="relative my-8 mx-auto max-md:hidden">
                {navigation.map((item) => (
                    <Link
                        key={item.name} 
                        to={item.href} 
                        className='px-4 py-2 text-white hover:drop-shadow-lg'>
                        {item.name}
                    </Link>
                ))}
            </div>
            <div className="flex flex-row text-white text-4xl">
                <Link to='/login' 
                    className={`mx-6 flex flex-row my-auto hover:border-2 border-slate-200 rounded-full animate-bounce hover:animate-none 
                        ${currentPath.pathname != '/login' ? 'block' : 'hidden'}`}>
                    <p className='text-base my-auto px-6'>LOGIN</p>
                    <MdArrowForwardIos className='mr-6'/>
                </Link>
                <button onClick={() => handleMobileNav()}><IoMenu className="md:hidden mx-6 active:border-2 border-slate-200 rounded-md"/></button>
            </div>
        </header>
        <nav className={`fixed ${showMobileNav ? 'left-0' : '-left-[100%]'} transition-all duration-700 z-50 w-full h-screen bg-[#c6c0b7] text-center`}>
            <div className="relative">
                <button onClick={() => handleMobileNav()}><IoMdClose className="absolute top-5 right-5 text-white text-4xl active:border-2 border-slate-200 rounded-md"/></button>
                <div className="pt-40 block">
                {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="w-2/5 mx-auto font-bold text-[#ffffff] block py-4 drop-shadow-md active:border-2 border-slate-200 rounded-md">
                        {item.name}
                    </a>
                ))}
                </div>
            </div>
        </nav>
    </div>
  )
}
