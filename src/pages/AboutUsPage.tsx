import React from 'react';
import Header from '../components/Header'
import { Translations } from '../types/translationTypes';

interface AboutUsPageProps {
    language: string;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ language }) => {
    const translations: Translations = {
        it: {
            title: 'Chi Siamo',
            subtitle: 'Scopri la nostra storia e la passione che ci guida.',
            historyTitle: 'La Nostra Storia',
            historyText: "Otto giovani laureati, stanchi del ritmo frenetico della città e desiderosi di dare un nuovo senso alla loro vita, hanno deciso di trasferirsi in campagna per dedicarsi all'agricoltura biologica. Uniti dalla passione per la natura e l'alimentazione sana, hanno fondato Biologika, un'azienda specializzata nella produzione di alimenti biologici non deperibili, come biscotti artigianali, miele di alta qualità e marmellate genuine. Con un approccio sostenibile e rispettoso dell'ambiente, coltivano le materie prime con metodi naturali, garantendo prodotti autentici e privi di sostanze chimiche. Oggi, Biologika è più di un'impresa: è un simbolo di riscatto e di ritorno alle origini, dimostrando che un'agricoltura etica e consapevole è possibile. La sede principale è situata nella regione Calabrese, ma possiamo spedire i nostri prodotti in tutta Italia.",
            valuesTitle: 'I Nostri Valori',
            values: 'Produzione sostenibile e biologica,Rispetto per la natura e gli animali,Collaborazione con agricoltori locali,Offerta di prodotti genuini e sani',
            teamTitle: 'Il Nostro Team',
            teamText: "Siamo un gruppo di appassionati che lavorano ogni giorno per portare sulle vostre tavole prodotti di alta qualità. Il nostro obiettivo è produrre alimenti sani, senza additivi chimici, e rispettare l'ambiente.",
        },
        ja: {
            title: '私たちについて',
            subtitle: '私たちの物語と私たちを駆り立てる情熱をご覧ください。',
            historyTitle: '私たちの歴史',
            historyText: '都会の喧騒に疲れ、人生に新しい意味を与えたいと願う8人の若い卒業生が、有機農業に専念するために田舎に移住することを決意しました。自然と健康的な食への情熱に惹かれ、彼らは手作りのクッキー、高品質の蜂蜜、本格的なジャムなどの保存可能な有機食品の生産を専門とする会社であるBiologikaを設立しました。持続可能で環境に優しいアプローチで、彼らは天然の農法で原材料を栽培し、本物で化学物質を含まない製品を保証します。今日、Biologikaは単なるビジネス以上のものです。それは贖罪と原点回帰の象徴であり、倫理的で意識的な農業が可能であることを示しています。本社はカラブリア地方にありますが、イタリア全土に製品を発送できます。',
            valuesTitle: '私たちの価値観',
            values: '持続可能で有機的な生産,自然と動物への敬意,地元の農家との協力,本物で健康的な製品の提供',
            teamTitle: '私たちのチーム',
            teamText: '私たちは、高品質の製品をあなたの食卓にお届けするために日々努力している情熱的なグループです。私たちの目標は、化学添加物を含まない健康的な食品を生産し、環境を尊重することです。',
        },
        en: {
            title: 'About Us',
            subtitle: 'Discover our story and the passion that drives us.',
            historyTitle: 'Our History',
            historyText: 'Eight young graduates, tired of the hectic pace of the city and eager to give a new meaning to their lives, decided to move to the countryside to dedicate themselves to organic farming. United by a passion for nature and healthy eating, they founded Biologika, a company specializing in the production of non-perishable organic foods, such as artisanal cookies, high-quality honey, and genuine jams. With a sustainable and environmentally friendly approach, they cultivate raw materials using natural methods, guaranteeing authentic products free from chemicals. Today, Biologika is more than a business: it is a symbol of redemption and a return to origins, demonstrating that ethical and conscious agriculture is possible. The headquarters is located in the Calabria region, but we can ship our products throughout Italy.',
            valuesTitle: 'Our Values',
            values: 'Sustainable and organic production,Respect for nature and animals,Collaboration with local farmers,Offering genuine and healthy products',
            teamTitle: 'Our Team',
            teamText: 'We are a group of enthusiasts who work every day to bring high-quality products to your tables. Our goal is to produce healthy food without chemical additives and respect the environment.',
        }
    };

    const getTranslatedText = (key: keyof Translations[string]): string => {
        return translations[language]?.[key] ?? key;
    };

    const valuesString: string = translations[language].values;
    const valuesArray: string[] = valuesString.split(',');

    return (
        <div className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">
            <Header
                title={getTranslatedText('title')}
                subtitle={getTranslatedText('subtitle')}
            />
            <section className="container mx-auto my-12">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">{getTranslatedText('historyTitle')}</h2>
                <p className="text-lg text-gray-700 dark:text-white">{getTranslatedText('historyText')}</p>
            </section>

            <section className="container mx-auto my-12">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">{getTranslatedText('valuesTitle')}</h2>
                <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-white">
                    {valuesArray.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>
            </section>

            <section className="container mx-auto my-12">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">{getTranslatedText('teamTitle')}</h2>
                <p className="text-lg text-gray-700 dark:text-white">{getTranslatedText('teamText')}</p>
            </section>
        </div>
    );
};

export default AboutUsPage;