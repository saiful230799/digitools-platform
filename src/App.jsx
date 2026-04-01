import './App.css'
import Navbar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import Stats from './Components/Stats/Stats'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
      toast.success("Added to cart", {
        position: "top-right",
        autoClose: 1500,
      });
    } else {
      toast.warn("Product already in cart", {
        position: "top-right",
        autoClose: 1500,
      });
    }
  };

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Removed from cart", {
      position: "top-right",
      autoClose: 1500,
    });
  };

  const handleCheckout = () => {
    setCart([]);
    toast.info("Checkout successful", {
      position: "top-right",
      autoClose: 2000,
    });
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
      <ToastContainer />
    </div>
  );
}

export default App;