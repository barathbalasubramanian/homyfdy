import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AbFooter from '../../components/AbFooter'
import Ques from '../Home/components/Ques'
import FeaturedProperties from '../Home/components/FeaturedProperties'
import PropertyCon from './components/PropertyCon'
import { useLocation } from 'react-router-dom'

function PropertyDetails() {
  const location = useLocation();
  const { property } = location.state || {};
  console.log(property)
  if (!property) {
    return <div>No property data available</div>;
  }

  return (
    <div>
      <Header/>
      <PropertyCon property={property}/>
      <div>
        <FeaturedProperties />
      </div>
      <Ques/>
      <AbFooter/>
      <Footer/>
    </div>
  )
}

export default PropertyDetails
