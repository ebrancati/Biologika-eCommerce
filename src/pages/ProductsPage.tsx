import React from 'react';
import ProductCard from '../components/ProductCard';
import { Translations } from '../types/translationTypes.ts';
import img from '../assets/logo.png';

interface ProductsPageProps {
    addToCart: (product: { title: string; price: number }) => void;
    language: string;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ addToCart, language }) => {
    const getTranslatedText = (key: string) => {
        const translations: Translations = {
            it: {
                title: 'I Nostri Prodotti',
                subtitle: 'Scopri la nostra selezione di prodotti biologici di alta qualità.',
                biscuits: 'Biscotti Biologici',
                biscuitsDesc: 'Realizzati con ingredienti naturali, senza conservanti.',
                honey: 'Miele Naturale',
                honeyDesc: 'Raccolto dalle nostre api in ambiente incontaminato.',
                jams: 'Marmellate Artigianali',
                jamsDesc: 'Preparata con frutta fresca senza additivi chimici.',
                peanutButter: 'Burro di Arachidi Biologico',
                peanutButterDesc: 'Realizzato con arachidi selezionate, senza aggiunta di zuccheri o oli artificiali.',
                oliveOil: 'Olio extravergine di Oliva Biologico',
                oliveOilDesc: 'Ottenuto da olive coltivate senza l\'uso di pesticidi.',
                cereals: 'Cereali Biologici',
                cerealsDesc: 'Coltivati con metodi naturali, senza l\'uso di pesticidi o fertilizzanti chimici, per un risveglio sano e nutriente.',
            },
            ja: {
                title: '私たちの製品',
                subtitle: '高品質なオーガニック製品のセレクションをご覧ください。',
                biscuits: 'オーガニックビスケット',
                biscuitsDesc: '保存料不使用、天然成分で作られています。',
                honey: '天然蜂蜜',
                honeyDesc: '汚染されていない環境で私たちのミツバチによって集められました。',
                jams: '手作りジャム',
                jamsDesc: '化学添加物なしで新鮮な果物から作られています。',
                peanutButter: 'オーガニックピーナッツバター',
                peanutButterDesc: '厳選されたピーナッツで作られ、砂糖や人工油は添加されていません。',
                oliveOil: 'オーガニックエクストラバージンオリーブオイル',
                oliveOilDesc: '農薬を使用せずに栽培されたオリーブから得られます。',
                cereals: 'オーガニックシリアル',
                cerealsDesc: '健康的で栄養価の高い目覚めのために、農薬や化学肥料を使用せずに天然農法で栽培されています。',
            },
        };
        return translations[language][key] || key;
    };

    return (
        <div className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">
            <header className="bg-green-600 text-white text-center py-16">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-semibold">{getTranslatedText('title')}</h1>
                    <p className="text-lg mt-4">{getTranslatedText('subtitle')}</p>
                </div>
            </header>
            <section className="container mx-auto my-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProductCard language={language} imageUrl={img} title={getTranslatedText('biscuits')} description={getTranslatedText('biscuitsDesc')} weight="700g" price={12.99} addToCart={addToCart} />
                    <ProductCard language={language} imageUrl={img} title={getTranslatedText('honey')} description={getTranslatedText('honeyDesc')} weight="700g" price={12.99} addToCart={addToCart} />
                    <ProductCard language={language} imageUrl={img} title={getTranslatedText('jams')} description={getTranslatedText('jamsDesc')} weight="700g" price={12.99} addToCart={addToCart} />
                    <ProductCard language={language} imageUrl={img} title={getTranslatedText('peanutButter')} description={getTranslatedText('peanutButterDesc')} weight="700g" price={12.99} addToCart={addToCart} />
                    <ProductCard language={language} imageUrl={img} title={getTranslatedText('oliveOil')} description={getTranslatedText('oliveOilDesc')} weight="700g" price={12.99} addToCart={addToCart} />
                    <ProductCard language={language} imageUrl={img} title={getTranslatedText('cereals')} description={getTranslatedText('cerealsDesc')} weight="700g" price={12.99} addToCart={addToCart} />
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;