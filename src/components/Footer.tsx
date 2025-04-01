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

    return (
        <footer className="bg-gray-800 text-white text-center py-4 dark:bg-black">
            <p>{getFooterText()}</p>
        </footer>
    );
};

export default Footer;