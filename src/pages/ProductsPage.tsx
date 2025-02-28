import React from 'react';
import ProductCard from '../components/ProductCard';
import img from '../assets/logo.png';

interface ProductsPageProps {
    addToCart: (product: { title: string; price: number }) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ addToCart }) => {
    return (
        <div className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">
            <header className="bg-green-600 text-white text-center py-16">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-semibold">I Nostri Prodotti</h1>
                    <p className="text-lg mt-4">Scopri la nostra selezione di prodotti biologici di alta qualità.</p>
                </div>
            </header>
            <section className="container mx-auto my-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProductCard imageUrl={img} title="Biscotti Biologici" description="Realizzati con ingredienti naturali, senza conservanti." weight="700g" price={12.99} addToCart={addToCart} />
                    <ProductCard imageUrl={img} title="Miele Naturale" description="Raccolto dalle nostre api in ambiente incontaminato." weight="700g" price={12.99} addToCart={addToCart} />
                    <ProductCard imageUrl={img} title="Marmellate Artigianali" description="Preparata con frutta fresca senza additivi chimici." weight="700g" price={12.99} addToCart={addToCart} />
                    <ProductCard imageUrl={img} title="Burro di Arachidi Biologico" description="Realizzato con arachidi selezionate, senza aggiunta di zuccheri o oli artificiali." weight="700g" price={12.99} addToCart={addToCart} />
                    <ProductCard imageUrl={img} title="Olio extravergine di Oliva Biologico" description="Ottenuto da olive coltivate senza l'uso di pesticidi." weight="700g" price={12.99} addToCart={addToCart} />
                    <ProductCard imageUrl={img} title="Cereali Biologici" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." weight="700g" price={12.99} addToCart={addToCart} />
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;