import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AbFooter from '../../components/AbFooter'
import Ques from '../Home/components/Ques'
import FeaturedProperties from '../Home/components/FeaturedProperties'
import PropertyCon from './components/PropertyCon'

function PropertyDetails() {
  return (
    <div>
      <Header/>
      <PropertyCon/>
      <div>
        <FeaturedProperties/>
      </div>
      <Ques/>
      <AbFooter/>
      <Footer/>
    </div>
  )
}

export default PropertyDetails
