


import Navbar from './components/Navbar/Navbar';
import './App.css';
import Banner from './components/Banner/Banner';
import Stat from './components/Stat/Stats';
import PremiumDigitalToolsSection from './components/PremiumDigitalToolSection/PremiumDigitalToolSection';
import  Footer from './components/Footer/Footer';
import StepsSection from './components/StepSection/StepsSection';

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
    <section>
    <StepsSection></StepsSection>
    <PremiumDigitalToolsSection></PremiumDigitalToolsSection>
    <Footer></Footer>

     </section>
     
    </>
  )
}

export default App
