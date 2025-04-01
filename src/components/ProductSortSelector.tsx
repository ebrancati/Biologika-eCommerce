import React from 'react';
import { Translations } from '../types/translationTypes';

interface SortSelectorProps {
    language: string;
    onSortChange: (sortOption: string) => void;
    currentSort: string;
}

const ProductSortSelector: React.FC<SortSelectorProps> = ({ language, onSortChange, currentSort }) => {
    const getTranslatedText = (key: string) => {
        const translations: Translations = {
            it: {
                sortBy: 'Ordina per:',
                defaultSort: 'Predefinito',
                priceAsc: 'Prezzo: dal più basso',
                priceDesc: 'Prezzo: dal più alto',
                alphabetical: 'Alfabetico: A-Z',
                reverseAlpha: 'Alfabetico: Z-A',
            },
            ja: {
                sortBy: '並び替え:',
                defaultSort: 'デフォルト',
                priceAsc: '価格: 安い順',
                priceDesc: '価格: 高い順',
                alphabetical: 'アルファベット順: A-Z',
                reverseAlpha: 'アルファベット順: Z-A',
            },
            en: {
                sortBy: 'Sort by:',
                defaultSort: 'Default',
                priceAsc: 'Price: low to high',
                priceDesc: 'Price: high to low',
                alphabetical: 'Alphabetical: A-Z',
                reverseAlpha: 'Alphabetical: Z-A',
            }
        };
        return translations[language][key] || key;
    };

    return (
        <div className="flex items-center mb-6 justify-end">
            <label htmlFor="sort-selector" className="mr-2 text-gray-700 dark:text-white">
                {getTranslatedText('sortBy')}
            </label>
            <select
                id="sort-selector"
                className="bg-white border border-gray-300 rounded px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                value={currentSort}
                onChange={(e) => onSortChange(e.target.value)}
            >
                <option value="default">{getTranslatedText('defaultSort')}</option>
                <option value="price-asc">{getTranslatedText('priceAsc')}</option>
                <option value="price-desc">{getTranslatedText('priceDesc')}</option>
                <option value="alpha-asc">{getTranslatedText('alphabetical')}</option>
                <option value="alpha-desc">{getTranslatedText('reverseAlpha')}</option>
            </select>
        </div>
    );
};

export default ProductSortSelector;