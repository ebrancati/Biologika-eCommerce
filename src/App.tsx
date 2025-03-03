import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
    const [cart, setCart] = useState<{ title: string; price: number }[]>([]);
    const [language, setLanguage] = useState('it');

    const addToCart = (product: { title: string; price: number }) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (index: number) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    const changeLanguage = (lang: string) => {
        setLanguage(lang);
    };

    return (
        <>
            <Nav
                cart={cart}
                removeFromCart={removeFromCart}
                language={language}
                changeLanguage={changeLanguage}
            />
            <Routes>
                <Route path="/" element={<HomePage language={language} />} />
                <Route path="/prodotti" element={<ProductsPage language={language} addToCart={addToCart} />} />
                <Route path="/chi-siamo" element={<AboutUsPage language={language} />} />
            </Routes>
            <Footer language={language} />
        </>
    );
}

export default App;