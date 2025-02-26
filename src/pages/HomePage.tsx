import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface HomePageProps {
    cart: { title: string; price: number }[];
    removeFromCart: (index: number) => void;
}

const HomePage: React.FC<HomePageProps> = ({ cart, removeFromCart }) => {
    return (
        <div className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">
            <Header cart={cart} removeFromCart={removeFromCart} />
            <header className="bg-green-600 text-white text-center py-16">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-semibold">Benvenuti in Biologika</h1>
                    <p className="text-lg mt-4">Scopri i nostri prodotti biologici di alta qualità.</p>
                </div>
            </header>
            <section className="bg-gray-100 py-20 dark:bg-zinc-900 dark:text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold">Scopri la Purezza della Natura</h2>
                    <p className="text-lg mt-4">Nel nostro negozio online troverai una selezione
                        di <Link
                            to="/prodotti"
                            className="text-green-500 underline"
                        >prodotti biologici
                        </Link> di
                        alta qualità, pensati per il tuo benessere e
                        per quello dell'ambiente. Ogni prodotto è scelto con cura da agricoltori e produttori che rispettano le
                        più
                        rigide
                        pratiche biologiche, garantendo freschezza, autenticità e sapore in ogni articolo. Dai cereali freschi
                        al burro di arachidi biologico, ogni acquisto è un passo verso un lifestyle più sano e sostenibile.</p>
                </div>
            </section>

            <section className="container mx-auto my-20 text-center dark:text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold">Impegno per la Sostenibilità</h2>
                    <p className="text-lg mt-4">
                        Siamo profondamente impegnati nella protezione dell'ambiente. I nostri prodotti
                        biologici non solo sono privi di
                        sostanze chimiche dannose, ma provengono da pratiche agricole che promuovono la biodiversità e il
                        rispetto per la terra.
                        Acquistando con noi, scegli di fare una differenza positiva per il pianeta e per la tua salute. Unisciti
                        alla nostra
                        missione di un futuro più verde!
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default HomePage;