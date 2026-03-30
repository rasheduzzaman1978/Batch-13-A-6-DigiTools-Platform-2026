


import Navbar from './components/Navbar/Navbar';
import './App.css';
import Banner from './components/Banner/Banner';
import Stat from './components/Stat/Stats';
import PremiumDigitalToolsSection from './components/PremiumDigitalToolSection/PremiumDigitalToolSection';
import  Footer from './components/Footer/Footer';
import StepsSection from './components/StepSection/StepsSection';
import ProductsCard from './components/ProductsCard/ProductsCard';
import Cart from './components/Cart/Cart';



function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Stat></Stat>
    <section>
    <StepsSection></StepsSection>
    <PremiumDigitalToolsSection></PremiumDigitalToolsSection>
    {/* <ProductsCard></ProductsCard>
    <Cart></Cart> */}
    <Footer></Footer>

     </section>
     
    </>
  )
}

export default App
