import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Language } from './types/translationTypes';

function App() {
    const [cart, setCart] = useState<{ title: string; price: number }[]>(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

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
            setLanguage('en');
            navigate(`/en`);
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

    useEffect(() => {
        document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e: MouseEvent) => {
                e.preventDefault();
                
                const targetId = anchor.getAttribute('href') || '';
                const target = document.querySelector(targetId);
                if (target) {
                    const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    window.history.pushState(null, '', targetId);
                }
            });
        });
        
        const handleScrollAnimation = () => {
            const sections = document.querySelectorAll('section');
            
            sections.forEach(section => {
                if (!section.classList.contains('section-animate'))
                    section.classList.add('section-animate');
                
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (sectionTop < windowHeight * 0.75) {
                    section.classList.add('visible');
                }
            });
        };
        
        handleScrollAnimation();
        window.addEventListener('scroll', handleScrollAnimation);
        document.documentElement.style.scrollBehavior = 'smooth';

        return () => {
            document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', () => {});
            });
            window.removeEventListener('scroll', handleScrollAnimation);
        };
    }, []);

    return (
        <>
            <Nav
                cart={cart}
                removeFromCart={removeFromCart}
                language={language}
                changeLanguage={changeLanguage}
            />
            <Routes>
                <Route path="/:language" element={<HomePage language={language} addToCart={addToCart} />} />
            </Routes>
            <Footer language={language} />
        </>
    );
}

export default App;