import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import { Translations } from '../types/translationTypes.ts';

interface HomePageProps {
    language: string;
}

const HomePage: React.FC<HomePageProps> = ({ language }) => {
    const getTranslatedText = (key: string) => {
        const translations: Translations = {
            it: {
                title: 'Benvenuti in Biologika',
                subtitle: 'Scopri i nostri prodotti biologici di alta qualità.',
                purity: 'Scopri la Purezza della Natura',
                selection: 'Nel nostro negozio online troverai una selezione di ',
                products: 'prodotti biologici',
                quality: ' di alta qualità, pensati per il tuo benessere e per quello dell\'ambiente. Ogni prodotto è scelto con cura da agricoltori e produttori che rispettano le più rigide pratiche biologiche, garantendo freschezza, autenticità e sapore in ogni articolo. Dai cereali freschi al burro di arachidi biologico, ogni acquisto è un passo verso un lifestyle più sano e sostenibile.',
                commitment: 'Impegno per la Sostenibilità',
                environment: 'Siamo profondamente impegnati nella protezione dell\'ambiente. I nostri prodotti biologici non solo sono privi di sostanze chimiche dannose, ma provengono da pratiche agricole che promuovono la biodiversità e il rispetto per la terra. Acquistando con noi, scegli di fare una differenza positiva per il pianeta e per la tua salute. Unisciti alla nostra missione di un futuro più verde!',
            },
            ja: {
                title: 'バイオロジカへようこそ',
                subtitle: '高品質なオーガニック製品をご覧ください。',
                purity: '自然の純粋さを発見',
                selection: 'オンラインストアでは、厳選された ',
                products: 'オーガニック製品',
                quality: ' あなたの健康と環境のために考えられた高品質な製品を見つけることができます。各製品は、最も厳格な有機農法を尊重する農家や生産者によって慎重に選ばれ、すべての商品において新鮮さ、本物、そして味を保証します。新鮮なシリアルからオーガニックピーナッツバターまで、すべての購入はより健康的で持続可能なライフスタイルへの一歩です。',
                commitment: '持続可能性への取り組み',
                environment: '私たちは環境保護に深く取り組んでいます。私たちのオーガニック製品は、有害な化学物質を含まないだけでなく、生物多様性と地球への敬意を促進する農業慣行から生まれています。私たちと購入することで、あなたは地球とあなたの健康にポジティブな変化をもたらすことを選択します。より緑豊かな未来への私たちの使命に参加してください！',
            },
        };
        return translations[language][key] || key;
    };

    return (
        <div className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">
            <Header
                title={getTranslatedText('title')}
                subtitle={getTranslatedText('subtitle')}
            />
            <section className="bg-gray-100 py-20 dark:bg-zinc-900 dark:text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold">{getTranslatedText('purity')}</h2>
                    <p className="text-lg mt-4">
                        {getTranslatedText('selection')}
                        <Link to="/prodotti" className="text-green-500 underline">
                            {getTranslatedText('products')}
                        </Link>
                        {getTranslatedText('quality')}
                    </p>
                </div>
            </section>
            <section className="container mx-auto my-20 text-center dark:text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold">{getTranslatedText('commitment')}</h2>
                    <p className="text-lg mt-4">
                        {getTranslatedText('environment')}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;