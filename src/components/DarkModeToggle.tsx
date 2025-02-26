import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid';

const DarkModeToggle: React.FC = () => {
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
            <span className="ml-2 hidden sm:inline">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
    );
};

export default DarkModeToggle;