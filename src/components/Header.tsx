import React from 'react';

interface PageHeaderProps {
    title: string;
    subtitle: string;
}

const Header: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
    return (
        <header className="bg-green-600 text-white text-center py-16">
            <div className="container mx-auto">
                <h1 className="text-4xl font-semibold">{title}</h1>
                <p className="text-lg mt-4">{subtitle}</p>
            </div>
        </header>
    );
};

export default Header;