import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Search from './components/Search';
import Attractions from './components/Attractions';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Carousel />
      <Destinations />
      <Search />
      <Attractions />
      <Footer />
    </>
  );
};

export default App;
