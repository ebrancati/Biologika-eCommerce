import React from 'react';
import leftImg from '../assets/anime/left-header-img.png';
import rightImg from '../assets/anime/right-header-img.png';

interface PageHeaderProps {
    title: string;
    subtitle: string;
}

const Header: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
    return (
        <header className="bg-green-600 text-white flex items-center justify-around">
            <img
                src={leftImg}
                className="max-h-[200px] max-w-full object-contain hidden sm:block max-[420px]:max-h-[30vw] self-end"
            />
            <div className="text-center">
                <h1 className="text-4xl font-semibold max-[420px]:text-[8vw]">{title}</h1>
                <p className="text-lg mt-4 max-[420px]:text-[4vw]">{subtitle}</p>
            </div>
            <img
                src={rightImg}
                className="max-h-[200px] max-w-full object-contain block sm:block max-[420px]:max-h-[30vw] self-end"
            />
        </header>
    );
};

export default Header;