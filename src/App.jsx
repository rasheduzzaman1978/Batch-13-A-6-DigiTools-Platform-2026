import React, { useState } from 'react';

// Navbar component import
import Navbar from './components/Navbar/Navbar';

// Banner section component import
import Banner from './components/Banner/Banner';

// Stats section component import
import Stat from './components/Stat/Stats';

// Product and Cart section component import
import PremiumDigitalToolsSection from './components/PremiumDigitalToolSection/PremiumDigitalToolSection';

// Footer component import
import Footer from './components/Footer/Footer';

// Steps section component import
import StepsSection from './components/StepSection/StepsSection';

// Pricing section component import
import PricingCard from './components/PricingCard/PricingCard';

// Ready section component import
import ReadyProduct from './components/ReadyProduct/ReadyProduct';

// App css import
import './App.css';

function App() {
  // Cart data store করার জন্য state
  const [carts, setCarts] = useState([]);

  return (
    <>
      {/* Navbar section */}
      <Navbar carts={carts} />

      {/* Banner section */}
      <Banner />

      {/* Stats section */}
      <Stat />

      <section>
        {/* Product + Cart toggle section */}
        <PremiumDigitalToolsSection
          carts={carts}
          setCarts={setCarts}
        />

        {/* Steps section */}
        <StepsSection />

        {/* Pricing section */}
        <PricingCard />

        {/* Ready to transform section */}
        <ReadyProduct />

        {/* Footer section */}
        <Footer />
      </section>
    </>
  );
}

export default App;