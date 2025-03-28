import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Install via: npm install lucide-react
import { FaUser, FaHeart, FaShoppingBag, FaEllipsisH } from 'react-icons/fa';

export const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div>
      <nav className="  w-full p-4  bg-gray-100 z-50">
       
        {/* Navbar */}
        <div className="container mx-auto md:px-20 pb-10  flex justify-between items-center ">
          {/* Left Side Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to={"/Sustainability"} className="text-sm font-medium hover:text-gray-500">
              Sustainability
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-gray-500">
              Customer Service
            </Link>
            <Link to={"/Newsletter"} className="text-sm font-medium hover:text-gray-500">
              Newsletter
            </Link>
            <FaEllipsisH className="text-lg text-gray-600 cursor-pointer" />
          </div>

          {/* Center Logo */}
          <div className="flex justify-center items-center">
            <Link to={'/'}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React Logo"
                className="h-8 w-8 animate-spin-slow"
              />
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to={"/Sign in"} className="flex items-center space-x-1 hover:text-gray-500">
              {/* <FaUser /> */}
              <span className="text-sm">Sign in</span>
            </Link>
            <Link to={"/Favoruites"} className="flex items-center space-x-1 hover:text-gray-500">
              {/* <FaHeart /> */}
              <span className="text-sm">Favourites</span>
            </Link>


            <Link to={"/Cart"} className="flex items-center space-x-1 hover:text-gray-500" ><FaShoppingBag /> <span className="text-sm">Shopping bag (0)</span></Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden space-y-4 p-4 text-center bg-gray-100 text-black">
            <li>
              <Link to={"/Sustainability"} className="block py-2" onClick={() => setIsOpen(false)}>
                Sustainability
              </Link>
            </li>
            <li>
              <Link to={"/Customer Service"} className="block py-2" onClick={() => setIsOpen(false)}>
                Customer Service
              </Link>
            </li>
            <li>
              <Link to={"/Newsletter"} className="block py-2" onClick={() => setIsOpen(false)}>
                Newsletter
              </Link>
            </li>
            <li>
              <Link to={"/ Sign in"} className="block py-2" onClick={() => setIsOpen(false)}>
                Sign in
              </Link>
            </li>
            <li>
              <Link to={"/Favourites"} className="block py-2" onClick={() => setIsOpen(false)}>
                Favourites
              </Link>
            </li>
            <li>
              <Link to={"/Cart"} className="block py-2" onClick={() => setIsOpen(false)}>
                Shopping bag (0)
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};
