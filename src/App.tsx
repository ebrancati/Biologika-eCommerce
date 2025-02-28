import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    const [cart, setCart] = useState<{ title: string; price: number }[]>([]);

    const addToCart = (product: { title: string; price: number }) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (index: number) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    return (
        <>
            <Header cart={cart} removeFromCart={removeFromCart} />
            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}
                />
                <Route
                    path="/prodotti"
                    element={<ProductsPage addToCart={addToCart} />}
                />
                <Route
                    path="/chi-siamo"
                    element={<AboutUsPage />}
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;