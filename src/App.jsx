


import Navbar from './components/Navbar/Navbar';
import './App.css';
import Banner from './components/Banner/Banner';
import Stat from './components/Stat/Stats';
import PremiumDigitalToolsSection from './components/PremiumDigitalToolSection/PremiumDigitalToolSection';
import  Footer from './components/Footer/Footer';

const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const productsPromise = getProducts();
console.log(productsPromise);

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Stat></Stat>
    
    <PremiumDigitalToolsSection></PremiumDigitalToolsSection>
    <Footer></Footer>

     
     
    </>
  )
}

export default App
