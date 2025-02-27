import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';

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
    <Routes>
      <Route path="/" element={<HomePage cart={cart} removeFromCart={removeFromCart} />} />
      <Route path="/prodotti" element={<ProductsPage cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
      <Route path="/chi-siamo" element={<AboutUsPage cart={cart} removeFromCart={removeFromCart} />} />
    </Routes>
  );
}

export default App;