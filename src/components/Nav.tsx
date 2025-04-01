import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle.tsx';
import CartSidebar from './CartSidebar.tsx';
import { Translations, Language } from '../types/translationTypes.ts';
import logo from '/logo.png';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

interface NavProps {
    cart: { title: string; price: number }[];
    removeFromCart: (index: number) => void;
    language: Language;
    changeLanguage: (lang: Language) => void;
}

const Nav: React.FC<NavProps> = ({ cart, removeFromCart, language, changeLanguage }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const languageMenuRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    // Define language constants to avoid type assertions
    const LANG_IT: Language = 'it';
    const LANG_JA: Language = 'ja';
    const LANG_EN: Language = 'en';

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const toggleLanguageMenu = () => {
        setIsLanguageMenuOpen(!isLanguageMenuOpen);
    };

    const changeLanguageFromMenu = (lang: Language) => {
        changeLanguage(lang);
        setIsLanguageMenuOpen(false);
        navigate(`/${lang}`);
        localStorage.setItem('language', lang);
    };

    const getTitle = () => {
        if (language === 'en') {
            return 'Biologika';
        } else if (language === 'it') {
            return 'Biologika';
        } else {
            return 'バイオロジカ';
        }
    };

    const getTranslatedText = (key: string) => {
        const translations: Translations = {
            it: {
                homepage: 'Homepage',
                products: 'Prodotti',
                aboutUs: 'Chi Siamo',
                languages: 'Lingue',
                selectLanguage: 'Seleziona lingua',
                italian: 'Italiano',
                japanese: 'Giapponese',
                english: 'Inglese'
            },
            ja: {
                homepage: 'ホームページ',
                products: '製品',
                aboutUs: '私たちについて',
                languages: '言語',
                selectLanguage: '言語を選択',
                italian: 'イタリア語',
                japanese: '日本語',
                english: '英語'
            },
            en: {
                homepage: 'Home',
                products: 'Products',
                aboutUs: 'About Us',
                languages: 'Languages',
                selectLanguage: 'Select language',
                italian: 'Italian',
                japanese: 'Japanese',
                english: 'English'
            }
        };
        return translations[language][key] || key;
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'products', 'about'];
            const scrollPosition = window.scrollY + 100;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    const handleNavLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 dark:bg-black">
            <div className="container mx-auto px-0 sm:px-6 py-3">
                <div className="flex justify-between items-center text-green-500">
                    <a href="#home" className="flex items-center text-xl font-semibold">
                        <img src={logo} alt="Logo Biologika" className="h-8 mr-2 ml-5" />
                        <span className="xxs:hidden sm:block">{getTitle()}</span>
                    </a>
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
                        <a
                            href="#home"
                            className={`transition-colors duration-300 ${activeSection === 'home' ? 'text-green-500 font-medium' : 'text-gray-700 dark:text-white'} hover:text-green-500`}
                        >
                            {getTranslatedText('homepage')}
                        </a>
                        <a
                            href="#products"
                            className={`transition-colors duration-300 ${activeSection === 'products' ? 'text-green-500 font-medium' : 'text-gray-700 dark:text-white'} hover:text-green-500`}
                        >
                            {getTranslatedText('products')}
                        </a>
                        <a
                            href="#about"
                            className={`transition-colors duration-300 ${activeSection === 'about' ? 'text-green-500 font-medium' : 'text-gray-700 dark:text-white'} hover:text-green-500`}
                        >
                            {getTranslatedText('aboutUs')}
                        </a>
                    </div>
                    <div className="flex items-center relative">
                        <DarkModeToggle language={language} />
                        <button className="relative ml-4 mr-2 cursor-pointer" onClick={toggleCart}>
                            <ShoppingCartIcon className="h-6 w-6" />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-4 bg-red-500 text-white rounded-full px-2 text-xs">
                                    {cart.length}
                                </span>
                            )}
                        </button>
                        <button
                            className="ml-2 mr-4 cursor-pointer flex items-center"
                            onClick={toggleLanguageMenu}
                            aria-label={getTranslatedText('selectLanguage')}
                            title={getTranslatedText('selectLanguage')}
                        >
                            <GlobeAltIcon className="h-6 w-6 mr-1" />
                            <span className="hidden sm:inline">{getTranslatedText('languages')}</span>
                        </button>
                        {isLanguageMenuOpen && (
                            <div
                                ref={languageMenuRef}
                                className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
                                style={{ top: '100%' }}
                            >
                                <div className="py-1">
                                    <button
                                        onClick={() => changeLanguageFromMenu(LANG_IT)}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 flex items-center"
                                    >
                                        <span className="flag-icon flag-icon-it mr-2"></span>
                                        {getTranslatedText('italian')}
                                    </button>
                                    <button
                                        onClick={() => changeLanguageFromMenu(LANG_EN)}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 flex items-center"
                                    >
                                        <span className="flag-icon flag-icon-gb mr-2"></span>
                                        {getTranslatedText('english')}
                                    </button>
                                    <button
                                        onClick={() => changeLanguageFromMenu(LANG_JA)}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 flex items-center"
                                    >
                                        <span className="flag-icon flag-icon-jp mr-2"></span>
                                        {getTranslatedText('japanese')}
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
                        <a
                            href="#home"
                            className={`${activeSection === 'home' ? 'text-green-500 font-medium' : 'text-gray-700 dark:text-white'} hover:text-green-500`}
                            onClick={handleNavLinkClick}
                        >
                            {getTranslatedText('homepage')}
                        </a>
                        <a
                            href="#products"
                            className={`${activeSection === 'products' ? 'text-green-500 font-medium' : 'text-gray-700 dark:text-white'} hover:text-green-500`}
                            onClick={handleNavLinkClick}
                        >
                            {getTranslatedText('products')}
                        </a>
                        <a
                            href="#about"
                            className={`${activeSection === 'about' ? 'text-green-500 font-medium' : 'text-gray-700 dark:text-white'} hover:text-green-500`}
                            onClick={handleNavLinkClick}
                        >
                            {getTranslatedText('aboutUs')}
                        </a>
                    </div>
                </div>
            </div>
            <CartSidebar language={language} cart={cart} isOpen={isCartOpen} onClose={toggleCart} removeFromCart={removeFromCart} />
        </nav>
    );
};

export default Nav;