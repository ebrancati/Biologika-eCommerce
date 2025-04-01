import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Language } from './types/translationTypes';

function App() {
    const [cart, setCart] = useState<{ title: string; price: number }[]>(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Use type assertion to handle the stored language
    const [language, setLanguage] = useState<Language>(
        (localStorage.getItem('language') as Language) || 'ja'
    );

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const pathLanguage = location.pathname.split('/')[1];

        if (pathLanguage === 'it' || pathLanguage === 'ja' || pathLanguage === 'en') {
            setLanguage(pathLanguage as Language);
        }
        else if (location.pathname === '/') {
            setLanguage('ja');
            navigate(`/ja/homepage`);
        }
    }, [location, navigate]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: { title: string; price: number }) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (index: number) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    // Update the type to match the Nav component's expected prop type
    const changeLanguage = (lang: Language) => {
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
                <Route path="/:language/homepage" element={<HomePage language={language} />} />
                <Route path="/:language/products" element={<ProductsPage language={language} addToCart={addToCart} />} />
                <Route path="/:language/about-us" element={<AboutUsPage language={language} />} />
            </Routes>
            <Footer language={language} />
        </>
    );
}

export default App;