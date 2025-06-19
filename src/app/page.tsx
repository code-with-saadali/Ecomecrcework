import React from 'react'
import Hero from './_components/Hero';
import FeaturesSection from './_components/FeaturesSection';
import FeaturedCollections from './_components/FeaturedCollections';
import PopularProduct from './_components/PopularProduct';
import KnitKnotHero from './_components/KnitKnotHero';
import Collection from './_components/Collection';
import Testimonial from './_components/Testimonial';
import Articales from './_components/Articales';
import FavouritDicount from './_components/FavouritDicount';


const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturesSection/>
      <FeaturedCollections/>
      <PopularProduct/>
      <KnitKnotHero/>
      <Collection/>
      <Testimonial/>
      <Articales/>
      <FavouritDicount/>
    </div>
  )
}

export default Home;