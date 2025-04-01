import React from 'react';

interface FooterProps {
    language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
    const getFooterText = () => {
        if (language === 'ja') {
            return '2025 バイオロジカ - 教育目的で開発';
        } else if (language === 'en') {
            return '2025 Biologika - Developed for educational purposes';
        } else {
            return '2025 Biologika - Sviluppato per scopi didattici';
        }
    };

    const getNavigationText = () => {
        if (language === 'ja') {
            return {
                quickLinks: 'クイックリンク',
                home: 'ホーム',
                products: '製品',
                aboutUs: '私たちについて'
            };
        } else if (language === 'en') {
            return {
                quickLinks: 'Quick Links',
                home: 'Home',
                products: 'Products',
                aboutUs: 'About Us'
            };
        } else {
            return {
                quickLinks: 'Link Rapidi',
                home: 'Homepage',
                products: 'Prodotti',
                aboutUs: 'Chi Siamo'
            };
        }
    };

    const nav = getNavigationText();

    return (
        <footer className="bg-gray-800 text-white py-8 dark:bg-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Biologika</h3>
                        <p className="text-gray-300">{getFooterText()}</p>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-bold mb-4">{nav.quickLinks}</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                                    {nav.home}
                                </a>
                            </li>
                            <li>
                                <a href="#products" className="text-gray-300 hover:text-white transition-colors">
                                    {nav.products}
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                                    {nav.aboutUs}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Biologika</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;