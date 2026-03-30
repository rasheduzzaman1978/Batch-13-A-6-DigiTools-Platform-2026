import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Stat from './components/Stat/Stats';
import PremiumDigitalToolsSection from './components/PremiumDigitalToolSection/PremiumDigitalToolSection';
import Footer from './components/Footer/Footer';
import StepsSection from './components/StepSection/StepsSection';
import './App.css';
import PricingCard from './components/PricingCard/PricingCard';

function App() {
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar carts={carts} />

      <Banner />

      <Stat />

      <section>
        

        <PremiumDigitalToolsSection
          carts={carts}
          setCarts={setCarts}
        />
        <StepsSection />
        <PricingCard></PricingCard>
        <Footer />
      </section>
    </>
  );
}

export default App;