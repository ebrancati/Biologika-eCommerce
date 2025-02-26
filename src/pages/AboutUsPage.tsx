import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface AboutUsPageProps {
    cart: { title: string; price: number }[];
    removeFromCart: (index: number) => void;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ cart, removeFromCart }) => {
    return (
        <div className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">
            <Header cart={cart} removeFromCart={removeFromCart} />
            <header className="bg-green-600 text-white text-center py-16">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-semibold">Chi Siamo</h1>
                    <p className="text-lg mt-4">Scopri la nostra storia e la passione che ci guida.</p>
                </div>
            </header>

            <section className="container mx-auto my-12">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">La Nostra Storia</h2>
                <p className="text-lg text-gray-700 dark:text-white">
                    Otto giovani laureati, stanchi del ritmo frenetico della città e desiderosi di dare un nuovo senso alla loro
                    vita, hanno deciso di trasferirsi in campagna per dedicarsi all'agricoltura biologica. Uniti dalla
                    passione per la natura e l’alimentazione sana, hanno fondato Biologika, un’azienda specializzata nella
                    produzione di alimenti biologici non deperibili, come biscotti artigianali, miele di alta qualità e
                    marmellate genuine. Con un approccio sostenibile e rispettoso dell’ambiente, coltivano le materie prime
                    con metodi naturali, garantendo prodotti autentici e privi di sostanze chimiche. Oggi, Biologika è più di
                    un’impresa: è un simbolo di riscatto e di ritorno alle origini, dimostrando che un’agricoltura etica e
                    consapevole è possibile. La sede principale è situata nella regione Calabrese, ma possiamo spedire i
                    nostri prodotti in tutta Italia.
                </p>
            </section>

            <section className="container mx-auto my-12">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">I Nostri Valori</h2>
                <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-white">
                    <li>Produzione sostenibile e biologica</li>
                    <li>Rispetto per la natura e gli animali</li>
                    <li>Collaborazione con agricoltori locali</li>
                    <li>Offerta di prodotti genuini e sani</li>
                </ul>
            </section>

            <section className="container mx-auto my-12">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">Il Nostro Team</h2>
                <p className="text-lg text-gray-700 dark:text-white">
                    Siamo un gruppo di appassionati che lavorano ogni giorno per portare sulle vostre tavole prodotti di alta
                    qualità. Il nostro obiettivo è produrre alimenti sani, senza additivi chimici, e rispettare l’ambiente.
                </p>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUsPage;