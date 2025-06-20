import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/Homepage'; 
import Signup from './landing_page/signup/signup'; 
import AboutPage from './landing_page/about/Aboutpage';
import ProductPage from './landing_page/products/ProductPage'; 
import PricingPage from './landing_page/pricing/Pricingpage';
import SupportPage from './landing_page/support/Supportpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path="/" element={<HomePage />}/> 
  <Route path="/Signup" element={<Signup />}/>
  <Route path="/abosut" element={<AboutPage />}/> 
  <Route path="/product" element={<ProductPage />}/> 
  <Route path="/pricing" element={<PricingPage />}/> 
  <Route path="/support" element={<SupportPage />}/> 
 </Routes> 
 <Footer/>
 </BrowserRouter>
);


