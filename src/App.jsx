import './App.css'
import Navbar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import Stats from './Components/Stats/Stats'
import { ToastContainer } from 'react-toastify'
import { useState } from 'react'
import MainContainer from './Components/MainContainer/MainContainer'
import Steps from './Components/Steps/Steps'
import Pricing from './Components/Pricing/Pricing'
import CtaSection from './Components/CTASection/CtaSection'
import Footer from './Components/FooterSection/FooterSection'

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    if (!isExist) {
      setCart([...cart, product]);
    }
  };

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setCart([]);
  };

  return (
  <div className="scroll-smooth">
    <Navbar cartCount={cart.length} /> 
    <Banner />
    <Stats />
    <div id="products">
      <MainContainer 
        cart={cart} 
        handleAddToCart={handleAddToCart} 
        handleRemove={handleRemove} 
        handleCheckout={handleCheckout} 
      />
    </div>

    <Steps /> 
    <div id="pricing">
      <Pricing /> 
    </div>

    <CtaSection /> 
    <Footer />
  </div>
);
}

export default App;