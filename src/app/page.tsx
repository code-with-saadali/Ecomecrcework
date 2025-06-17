import React from 'react'
import Navbar from './_components/Navbar';
import Hero from './_components/Hero';
import FeaturesSection from './_components/FeaturesSection';
import FeaturedCollections from './_components/FeaturedCollections';
import PopularProduct from './_components/PopularProduct';
import KnitKnotHero from './_components/KnitKnotHero';
import Footer from './_components/Footer';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturesSection/>
      <FeaturedCollections/>
      <PopularProduct/>
      <KnitKnotHero/>
      <Footer/>
    </div>
  )
}

export default Home;