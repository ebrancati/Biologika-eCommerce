import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import CartSidebar from './CartSidebar';
import logo from '/logo.png';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
    cart: { title: string; price: number }[];
    removeFromCart: (index: number) => void;
}

const Header: React.FC<HeaderProps> = ({ cart, removeFromCart }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 dark:bg-black">
            <div className="container mx-auto px-0 sm:px-6 py-3">
                <div className="flex justify-between items-center text-green-500">
                    <Link to="/" className="flex items-center text-xl font-semibold">
                        <img src={logo} alt="Logo Biologika" className="h-8 mr-2 ml-5" />
                        <span className="xxs:hidden sm:block">Biologika</span>
                    </Link>
                    <button
                        className="lg:hidden text-gray-500 hover:text-gray-700 cursor-pointer"
                        type="button"
                        aria-label="Toggle navigation"
                        onClick={toggleMobileMenu}
                    >
                        <span className="block w-6 h-1 bg-gray-600 dark:bg-white mb-1"></span>
                        <span className="block w-6 h-1 bg-gray-600 dark:bg-white mb-1"></span>
                        <span className="block w-6 h-1 bg-gray-600 dark:bg-white"></span>
                    </button>
                    <div className="hidden lg:flex space-x-6">
                        <Link
                            to="/"
                            className={location.pathname === '/' ? 'hover:underline' : 'text-gray-700 hover:underline dark:text-white'}
                        >
                            Homepage
                        </Link>
                        <Link
                            to="/prodotti"
                            className={location.pathname === '/prodotti' ? 'hover:underline' : 'text-gray-700 hover:underline dark:text-white'}
                        >
                            Prodotti
                        </Link>
                        <Link
                            to="/chi-siamo"
                            className={location.pathname === '/chi-siamo' ? 'hover:underline' : 'text-gray-700 hover:underline dark:text-white'}
                        >
                            Chi Siamo
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <DarkModeToggle />
                        <button className="relative ml-4 cursor-pointer" onClick={toggleCart}>
                            <ShoppingCartIcon className="h-6 w-6 mr-5" />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                                    {cart.length}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div
                id="mobileMenu"
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white shadow-md dark:bg-gray-900`}
            >
                <div className="container mx-auto px-0 py-3 text-green-500">
                    <div className="flex flex-col space-y-4 ml-5">
                        <Link
                            to="/"
                            className={location.pathname === '/' ? 'hover:underline' : 'text-gray-700 hover:underline dark:text-white'}
                        >
                            Homepage
                        </Link>
                        <Link
                            to="/prodotti"
                            className={location.pathname === '/prodotti' ? 'hover:underline' : 'text-gray-700 hover:underline dark:text-white'}
                        >
                            Prodotti
                        </Link>
                        <Link
                            to="/chi-siamo"
                            className={location.pathname === '/chi-siamo' ? 'hover:underline' : 'text-gray-700 hover:underline dark:text-white'}
                        >
                            Chi Siamo
                        </Link>
                    </div>
                </div>
            </div>
            <CartSidebar cart={cart} isOpen={isCartOpen} onClose={toggleCart} removeFromCart={removeFromCart} />
        </nav>
    );
};

export default Header;