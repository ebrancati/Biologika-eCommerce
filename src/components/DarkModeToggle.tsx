import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid';

interface DarkModeToggleProps {
    language: string;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ language }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(savedDarkMode);
        if (savedDarkMode) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', String(!isDarkMode));
    };

    const getModeText = () => {
        if (language === 'ja') {
            return isDarkMode ? 'ライトモード' : 'ダークモード';
        } else if (language === 'en') {
            return isDarkMode ? 'Light Mode' : 'Dark Mode';
        } else {
            return isDarkMode ? 'Modalità Chiara' : 'Modalità Scura';
        }
    };

    return (
        <button
            id="darkModeToggle"
            className={`flex items-center px-4 py-2 rounded-full transition-colors duration-300 cursor-pointer ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            onClick={toggleDarkMode}
        >
            {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
            ) : (
                <MoonIcon className="h-5 w-5" />
            )}
            <span className="ml-2 hidden sm:inline">{getModeText()}</span>
        </button>
    );
};

export default DarkModeToggle;