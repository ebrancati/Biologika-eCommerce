import React from 'react';
import { Translations } from '../types/translationTypes.ts';

interface CardProps {
    title: string;
    description: string;
    weight: string;
    price: number;
    imageUrl: string;
    addToCart: (product: { title: string; price: number }) => void;
    language: string;
}

const ProductCard: React.FC<CardProps> = ({ language, title, description, weight, price, imageUrl, addToCart }) => {
    const formattedPrice = price.toFixed(2).split('.');

    const handleAddToCart = () => {
        addToCart({ title, price });
    };

    const getTranslatedText = (key: string) => {
        const translations: Translations = {
            it: {
                addToCart: 'Aggiungi al carrello',
            },
            ja: {
                addToCart: 'カートに追加',
            },
        };
        return translations[language][key] || translations.it[key];
    };

    return (
        <div className="card max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden dark:bg-black">
            <img src={imageUrl} className="w-full h-56 object-cover" alt={title} />
            <div className="p-6">
                <h5 className="text-xl font-semibold text-green-600 h-15">{title}</h5>
                <p className="text-gray-600 h-20 dark:text-white">{description}</p>
                <div className="flex justify-between mt-4 text-xl font-bold">
                    <p className="text-lg">{weight}</p>
                    <p className="text-yellow-500">
                        <span className="text-2xl">€{formattedPrice[0]}</span>
                        <span className="text-lg">,{formattedPrice[1]}</span>
                    </p>
                </div>
                <button
                    className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full"
                    onClick={handleAddToCart}
                >
                    {getTranslatedText('addToCart')}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;