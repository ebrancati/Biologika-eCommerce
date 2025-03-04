import React from 'react';
import leftImg from '../assets/anime/left-header-img.png';
import rightImg from '../assets/anime/right-header-img.png';
import { useLocation } from 'react-router-dom';

interface PageHeaderProps {
    title: string;
    subtitle: string;
}

const Header: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isProductsPage = location.pathname === '/prodotti';
    const isAboutPage = location.pathname === '/chi-siamo';

    if (isAboutPage) {
        return (
            <header className="bg-green-600 text-white flex items-center justify-center h-[200px]">
                <div className="text-center">
                    <h1 className="text-4xl font-semibold">{title}</h1>
                    <p className="text-lg mt-4">{subtitle}</p>
                </div>
            </header>
        )
    }
    else {
        return (
            <header className="bg-green-600 text-white flex items-center justify-around">
                <img
                    src={leftImg}
                    className={`max-h-[200px] max-w-full object-contain ${isProductsPage ? 'block sm:block' : 'hidden sm:block'}`}
                />
                <div className="text-center">
                    <h1 className="text-4xl font-semibold">{title}</h1>
                    <p className="text-lg mt-4">{subtitle}</p>
                </div>
                <img
                    src={rightImg}
                    className={`max-h-[200px] max-w-full object-contain ${isHomePage ? 'block sm:block' : 'hidden sm:block'}`}
                />
            </header>
        );
    }
};

export default Header;