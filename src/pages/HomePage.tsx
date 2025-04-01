import React, { useState, useMemo, useCallback } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import ProductSortSelector from '../components/ProductSortSelector';
import { Translations } from '../types/translationTypes.ts';
import img from '../assets/anime/biologika-img.png';

// product imgs
import cookiesImg from '../assets/products/biscuits.webp';
import honeyImg from '../assets/products/honey.jpg';
import jamImg from '../assets/products/jam.jpg';
import peanutButterImg from '../assets/products/peanut-butter.jpg';
import oliveOilImg from '../assets/products/olive-oil.jpg';
import cerealsImg from '../assets/products/cereals.jpg';

interface HomePageProps {
    language: string;
    addToCart: (product: { title: string; price: number }) => void;
}

interface Product {
    id: string;
    title: string;
    description: string;
    weight: string;
    price: number;
    imageUrl: string;
}

const HomePage: React.FC<HomePageProps> = ({ language, addToCart }) => {
    const [sortOption, setSortOption] = useState<string>('default');

    const getTranslatedText = useCallback((key: string) => {
        const translations: Translations = {
            it: {
                // Home section
                title: 'Benvenuti in Biologika',
                subtitle: 'Scopri i nostri prodotti biologici di alta qualità.',
                purity: 'Scopri la Purezza della Natura',
                selection: 'Nel nostro negozio online troverai una selezione di ',
                products: 'prodotti biologici',
                quality: ' di alta qualità, pensati per il tuo benessere e per quello dell\'ambiente. Ogni prodotto è scelto con cura da agricoltori e produttori che rispettano le più rigide pratiche biologiche, garantendo freschezza, autenticità e sapore in ogni articolo. Dai cereali freschi al burro di arachidi biologico, ogni acquisto è un passo verso un lifestyle più sano e sostenibile.',
                commitment: 'Impegno per la Sostenibilità',
                environment: 'Siamo profondamente impegnati nella protezione dell\'ambiente. I nostri prodotti biologici non solo sono privi di sostanze chimiche dannose, ma provengono da pratiche agricole che promuovono la biodiversità e il rispetto per la terra. Acquistando con noi, scegli di fare una differenza positiva per il pianeta e per la tua salute. Unisciti alla nostra missione di un futuro più verde!',
                
                // Products section
                productsTitle: 'I Nostri Prodotti',
                productsSubtitle: 'Scopri la nostra selezione di prodotti biologici di alta qualità.',
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
                
                // About Us section
                aboutTitle: 'Chi Siamo',
                aboutSubtitle: 'Scopri la nostra storia e la passione che ci guida.',
                historyTitle: 'La Nostra Storia',
                historyText: "Otto giovani laureati, stanchi del ritmo frenetico della città e desiderosi di dare un nuovo senso alla loro vita, hanno deciso di trasferirsi in campagna per dedicarsi all'agricoltura biologica. Uniti dalla passione per la natura e l'alimentazione sana, hanno fondato Biologika, un'azienda specializzata nella produzione di alimenti biologici non deperibili, come biscotti artigianali, miele di alta qualità e marmellate genuine. Con un approccio sostenibile e rispettoso dell'ambiente, coltivano le materie prime con metodi naturali, garantendo prodotti autentici e privi di sostanze chimiche. Oggi, Biologika è più di un'impresa: è un simbolo di riscatto e di ritorno alle origini, dimostrando che un'agricoltura etica e consapevole è possibile. La sede principale è situata nella regione Calabrese, ma possiamo spedire i nostri prodotti in tutta Italia.",
                valuesTitle: 'I Nostri Valori',
                values: 'Produzione sostenibile e biologica,Rispetto per la natura e gli animali,Collaborazione con agricoltori locali,Offerta di prodotti genuini e sani',
                teamTitle: 'Il Nostro Team',
                teamText: "Siamo un gruppo di appassionati che lavorano ogni giorno per portare sulle vostre tavole prodotti di alta qualità. Il nostro obiettivo è produrre alimenti sani, senza additivi chimici, e rispettare l'ambiente.",
            },
            ja: {
                // Home section
                title: 'バイオロジカへようこそ',
                subtitle: '高品質なオーガニック製品をご覧ください。',
                purity: '自然の純粋さを発見',
                selection: 'オンラインストアでは、厳選された ',
                products: 'オーガニック製品',
                quality: ' あなたの健康と環境のために考えられた高品質な製品を見つけることができます。各製品は、最も厳格な有機農法を尊重する農家や生産者によって慎重に選ばれ、すべての商品において新鮮さ、本物、そして味を保証します。新鮮なシリアルからオーガニックピーナッツバターまで、すべての購入はより健康的で持続可能なライフスタイルへの一歩です。',
                commitment: '持続可能性への取り組み',
                environment: '私たちは環境保護に深く取り組んでいます。私たちのオーガニック製品は、有害な化学物質を含まないだけでなく、生物多様性と地球への敬意を促進する農業慣行から生まれています。私たちと購入することで、あなたは地球とあなたの健康にポジティブな変化をもたらすことを選択します。より緑豊かな未来への私たちの使命に参加してください！',
                
                // Products section
                productsTitle: '私たちの製品',
                productsSubtitle: '高品質なオーガニック製品のセレクションをご覧ください。',
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
                
                // About Us section
                aboutTitle: '私たちについて',
                aboutSubtitle: '私たちの物語と私たちを駆り立てる情熱をご覧ください。',
                historyTitle: '私たちの歴史',
                historyText: '都会の喧騒に疲れ、人生に新しい意味を与えたいと願う8人の若い卒業生が、有機農業に専念するために田舎に移住することを決意しました。自然と健康的な食への情熱に惹かれ、彼らは手作りのクッキー、高品質の蜂蜜、本格的なジャムなどの保存可能な有機食品の生産を専門とする会社であるBiologikaを設立しました。持続可能で環境に優しいアプローチで、彼らは天然の農法で原材料を栽培し、本物で化学物質を含まない製品を保証します。今日、Biologikaは単なるビジネス以上のものです。それは贖罪と原点回帰の象徴であり、倫理的で意識的な農業が可能であることを示しています。本社はカラブリア地方にありますが、イタリア全土に製品を発送できます。',
                valuesTitle: '私たちの価値観',
                values: '持続可能で有機的な生産,自然と動物への敬意,地元の農家との協力,本物で健康的な製品の提供',
                teamTitle: '私たちのチーム',
                teamText: '私たちは、高品質の製品をあなたの食卓にお届けするために日々努力している情熱的なグループです。私たちの目標は、化学添加物を含まない健康的な食品を生産し、環境を尊重することです。',
            },
            en: {
                // Home section
                title: 'Welcome to Biologika',
                subtitle: 'Discover our high-quality organic products.',
                purity: 'Discover the Purity of Nature',
                selection: 'In our online store you\'ll find a selection of ',
                products: 'organic products',
                quality: ' of high quality, designed for your well-being and that of the environment. Each product is carefully chosen from farmers and producers who respect the strictest organic practices, ensuring freshness, authenticity, and flavor in every item. From fresh cereals to organic peanut butter, every purchase is a step towards a healthier and more sustainable lifestyle.',
                commitment: 'Commitment to Sustainability',
                environment: 'We are deeply committed to protecting the environment. Our organic products are not only free from harmful chemicals but come from agricultural practices that promote biodiversity and respect for the land. By purchasing from us, you choose to make a positive difference for the planet and for your health. Join our mission for a greener future!',
                
                // Products section
                productsTitle: 'Our Products',
                productsSubtitle: 'Discover our selection of high-quality organic products.',
                biscuits: 'Organic Biscuits',
                biscuitsDesc: 'Made with natural ingredients, without preservatives.',
                honey: 'Natural Honey',
                honeyDesc: 'Harvested from our bees in an unpolluted environment.',
                jams: 'Artisanal Jams',
                jamsDesc: 'Prepared with fresh fruit without chemical additives.',
                peanutButter: 'Organic Peanut Butter',
                peanutButterDesc: 'Made with selected peanuts, without added sugars or artificial oils.',
                oliveOil: 'Organic Extra Virgin Olive Oil',
                oliveOilDesc: 'Obtained from olives grown without the use of pesticides.',
                cereals: 'Organic Cereals',
                cerealsDesc: 'Grown using natural methods, without the use of pesticides or chemical fertilizers, for a healthy and nutritious breakfast.',
                
                // About Us section
                aboutTitle: 'About Us',
                aboutSubtitle: 'Discover our story and the passion that drives us.',
                historyTitle: 'Our History',
                historyText: 'Eight young graduates, tired of the hectic pace of the city and eager to give a new meaning to their lives, decided to move to the countryside to dedicate themselves to organic farming. United by a passion for nature and healthy eating, they founded Biologika, a company specializing in the production of non-perishable organic foods, such as artisanal cookies, high-quality honey, and genuine jams. With a sustainable and environmentally friendly approach, they cultivate raw materials using natural methods, guaranteeing authentic products free from chemicals. Today, Biologika is more than a business: it is a symbol of redemption and a return to origins, demonstrating that ethical and conscious agriculture is possible. The headquarters is located in the Calabria region, but we can ship our products throughout Italy.',
                valuesTitle: 'Our Values',
                values: 'Sustainable and organic production,Respect for nature and animals,Collaboration with local farmers,Offering genuine and healthy products',
                teamTitle: 'Our Team',
                teamText: 'We are a group of enthusiasts who work every day to bring high-quality products to your tables. Our goal is to produce healthy food without chemical additives and respect the environment.',
            }
        };
        return translations[language][key] || key;
    }, [language]);

    const products: Product[] = useMemo(() => {
        return [
            {
                id: 'biscuits',
                title: getTranslatedText('biscuits'),
                description: getTranslatedText('biscuitsDesc'),
                weight: '400g',
                price: 5.99,
                imageUrl: cookiesImg
            },
            {
                id: 'honey',
                title: getTranslatedText('honey'),
                description: getTranslatedText('honeyDesc'),
                weight: '300g',
                price: 8.99,
                imageUrl: honeyImg
            },
            {
                id: 'jams',
                title: getTranslatedText('jams'),
                description: getTranslatedText('jamsDesc'),
                weight: '250g',
                price: 4.99,
                imageUrl: jamImg
            },
            {
                id: 'peanutButter',
                title: getTranslatedText('peanutButter'),
                description: getTranslatedText('peanutButterDesc'),
                weight: '400g',
                price: 6.99,
                imageUrl: peanutButterImg
            },
            {
                id: 'oliveOil',
                title: getTranslatedText('oliveOil'),
                description: getTranslatedText('oliveOilDesc'),
                weight: '750ml',
                price: 14.99,
                imageUrl: oliveOilImg
            },
            {
                id: 'cereals',
                title: getTranslatedText('cereals'),
                description: getTranslatedText('cerealsDesc'),
                weight: '500g',
                price: 6.99,
                imageUrl: cerealsImg
            }
        ];
    }, [getTranslatedText]);

    const sortedProducts = useMemo(() => {
        if (sortOption === 'default') {
            return [...products];
        }

        return [...products].sort((a, b) => {
            switch (sortOption) {
                case 'price-asc':
                    return a.price - b.price;
                case 'price-desc':
                    return b.price - a.price;
                case 'alpha-asc':
                    return a.title.localeCompare(b.title);
                case 'alpha-desc':
                    return b.title.localeCompare(a.title);
                default:
                    return 0;
            }
        });
    }, [products, sortOption]);

    const valuesString: string = getTranslatedText('values');
    const valuesArray: string[] = valuesString.split(',');

    return (
        <div className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">
            <Header
                title={getTranslatedText('title')}
                subtitle={getTranslatedText('subtitle')}
            />

            <section id="home" className="bg-gray-100 py-20 dark:bg-zinc-900 dark:text-white scroll-mt-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold">{getTranslatedText('purity')}</h2>
                    <p className="text-lg mt-4">
                        {getTranslatedText('selection')}
                        <a href="#products" className="text-green-500 underline">
                            {getTranslatedText('products')}
                        </a>
                        {getTranslatedText('quality')}
                    </p>
                </div>
            </section>
            
            <section className="container mx-auto my-20 dark:text-white">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-semibold">{getTranslatedText('commitment')}</h2>
                        <p className="text-lg mt-4">
                            {getTranslatedText('environment')}
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <img src={img} className="w-full" alt="Immagine" />
                    </div>
                </div>
            </section>

            <section id="products" className="py-20 bg-gray-100 dark:bg-zinc-900 scroll-mt-16">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-green-600 mb-4">{getTranslatedText('productsTitle')}</h2>
                        <p className="text-xl">{getTranslatedText('productsSubtitle')}</p>
                    </div>
                    
                    <ProductSortSelector 
                        language={language} 
                        onSortChange={setSortOption} 
                        currentSort={sortOption} 
                    />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sortedProducts.map((product) => (
                            <ProductCard 
                                key={product.id}
                                language={language} 
                                imageUrl={product.imageUrl} 
                                title={product.title} 
                                description={product.description} 
                                weight={product.weight} 
                                price={product.price} 
                                addToCart={addToCart} 
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section id="about" className="py-20 scroll-mt-16">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-green-600 mb-4">{getTranslatedText('aboutTitle')}</h2>
                        <p className="text-xl">{getTranslatedText('aboutSubtitle')}</p>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12">
                            <h3 className="text-2xl font-semibold text-green-600 mb-4">{getTranslatedText('historyTitle')}</h3>
                            <p className="text-lg text-gray-700 dark:text-white">{getTranslatedText('historyText')}</p>
                        </div>

                        <div className="mb-12">
                            <h3 className="text-2xl font-semibold text-green-600 mb-4">{getTranslatedText('valuesTitle')}</h3>
                            <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-white">
                                {valuesArray.map((value, index) => (
                                    <li key={index}>{value}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-12">
                            <h3 className="text-2xl font-semibold text-green-600 mb-4">{getTranslatedText('teamTitle')}</h3>
                            <p className="text-lg text-gray-700 dark:text-white">{getTranslatedText('teamText')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;