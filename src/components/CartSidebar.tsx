import React from 'react';
import { Translations, Language } from '../types/translationTypes';

interface CartSidebarProps {
    language: Language;
    cart: { title: string; price: number }[];
    isOpen: boolean;
    onClose: () => void;
    removeFromCart: (index: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ language, cart, isOpen, onClose, removeFromCart }) => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    const getTranslatedText = (key: string) => {
        const translations: Translations = {
            it: {
                title: 'Carrello',
                empty: 'Il carrello è vuoto.',
                total: 'Totale:',
            },
            ja: {
                title: 'カート',
                empty: 'カートは空です。',
                total: '合計：',
            },
            en: {
                title: 'Cart',
                empty: 'Your cart is empty.',
                total: 'Total:',
            }
        };
        return translations[language][key] || key;
    };

    const formatTotal = (total: number, language: string) => {
        if (language === 'it') {
            return `€${total.toFixed(2).replace('.', ',')}`;
        } else if (language === 'ja') {
            return `¥${Math.round(total * 150)}`;
        } else if (language === 'en') {
            return `${total.toFixed(2)}`;
        } else {
            return `€${total.toFixed(2)}`;
        }
    };

    return (
        <div
            className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} dark:bg-zinc-800 dark:text-white`}
        >
            <div className="p-4 overflow-y-auto h-full">
                <h2 className="text-2xl font-semibold mb-4">{getTranslatedText('title')}</h2>
                <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-800" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                {cart.length === 0 ? (
                    <p>{getTranslatedText('empty')}</p>
                ) : (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                                <span>{item.title}</span>
                                <span>{formatTotal(item.price, language)}</span>
                                <button className="text-red-500 hover:text-red-700" onClick={() => removeFromCart(index)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 1 0 00-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
                {cart.length > 0 && (
                    <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold">{getTranslatedText('total')}</span>
                            <span className="font-bold">{formatTotal(total, language)}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartSidebar;