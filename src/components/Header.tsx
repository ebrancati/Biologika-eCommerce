import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import CartSidebar from './CartSidebar';
import { Translations } from '../types/translationTypes.ts';
import logo from '/logo.png';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
    cart: { title: string; price: number }[];
    removeFromCart: (index: number) => void;
    language: string;
    changeLanguage: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cart, removeFromCart, language, changeLanguage }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const location = useLocation();
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const languageMenuRef = useRef<HTMLDivElement>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const toggleLanguageMenu = () => {
        setIsLanguageMenuOpen(!isLanguageMenuOpen);
    };

    const changeLanguageFromMenu = (lang: string) => {
        changeLanguage(lang);
        setIsLanguageMenuOpen(false);
        console.log(`Language changed to: ${lang}`);
    };

    const getTitle = () => {
        return language === 'it' ? 'Biologika' : 'バイオロジカ';
    };

    const getTranslatedText = (key: string) => {
        const translations: Translations = {
            it: {
                homepage: 'Homepage',
                prodotti: 'Prodotti',
                chiSiamo: 'Chi Siamo',
            },
            ja: {
                homepage: 'ホームページ',
                prodotti: '製品',
                chiSiamo: '私たちについて',
            },
        };
        return translations[language][key] || key;
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
                setIsLanguageMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [languageMenuRef]);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 dark:bg-black">
            <div className="container mx-auto px-0 sm:px-6 py-3">
                <div className="flex justify-between items-center text-green-500">
                    <Link to="/" className="flex items-center text-xl font-semibold">
                        <img src={logo} alt="Logo Biologika" className="h-8 mr-2 ml-5" />
                        <span className="xxs:hidden sm:block">{getTitle()}</span>
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
                            {getTranslatedText('homepage')}
                        </Link>
                        <Link
                            to="/prodotti"
                            className={location.pathname === '/prodotti' ? 'hover:underline' : 'text-gray-700 hover:underline dark:text-white'}
                        >
                            {getTranslatedText('prodotti')}
                        </Link>
                        <Link
                            to="/chi-siamo"
                            className={location.pathname === '/chi-siamo' ? 'hover:underline' : 'text-gray-700 hover:underline dark:text-white'}
                        >
                            {getTranslatedText('chiSiamo')}
                        </Link>
                    </div>
                    <div className="flex items-center relative">
                        <DarkModeToggle language={language} />
                        <button className="relative ml-4 mr-5 cursor-pointer" onClick={toggleCart}>
                            <ShoppingCartIcon className="h-6 w-6" />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-4 bg-red-500 text-white rounded-full px-2 text-xs">
                                    {cart.length}
                                </span>
                            )}
                        </button>
                        <button className="ml-4 mr-5 cursor-pointer" onClick={toggleLanguageMenu}>
                            <GlobeAltIcon className="h-6 w-6" />
                        </button>
                        {isLanguageMenuOpen && (
                            <div ref={languageMenuRef} className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                <div className="py-1">
                                    <button onClick={() => changeLanguageFromMenu('it')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                                        Italiano
                                    </button>
                                    <button onClick={() => changeLanguageFromMenu('ja')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                                        Giapponese
                                    </button>
                                </div>
                            </div>
                        )}
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
                            {getTranslatedText('homepage')}
                        </Link>
                        <Link
                            to="/prodotti"
                            className={location.pathname === '/prodotti' ? 'hover:underline' : 'text-gray-700 hover:underline dark:text-white'}
                        >
                            {getTranslatedText('prodotti')}
                        </Link>
                        <Link
                            to="/chi-siamo"
                            className={location.pathname === '/chi-siamo' ? 'hover:underline' : 'text-gray-700 hover:underline dark:text-white'}
                        >
                            {getTranslatedText('chiSiamo')}
                        </Link>
                    </div>
                </div>
            </div>
            <CartSidebar language={language} cart={cart} isOpen={isCartOpen} onClose={toggleCart} removeFromCart={removeFromCart} />
        </nav>
    );
};

export default Header;