import React from 'react'
import Hero from './_components/Hero';
import CategorySection from './_components/CategorySection';
import PopularProduct from '../_components/PopularProduct';
import BestStyle from './_components/BestStyle';
import ElegantCollection from './_components/ElegantCollection';
import StorySection from './_components/StorySection';
import Collection from '../_components/Collection';
import NewArrivals from './_components/NewArrivals';
import Follow from './_components/Follow';

const page = () => {
  return (
    <div>
        <Hero/>
        <CategorySection/>
        <PopularProduct/>
        <BestStyle/>
        <ElegantCollection/>
        <StorySection/>
        <Collection/>
        <NewArrivals/>
        <Follow/>
    </div>
  )
}

export default page;