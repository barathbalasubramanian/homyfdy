import React from 'react'
import Header from '../../components/Header'
import CompareHeader from './components/CompareHeader'
import AbFooter from '../../components/AbFooter'
import Footer from '../../components/Footer'
import PropertyComparison from './components/PropertyComparison'

function ComparePage() {
  return (
    <div>
      <Header/>
      <CompareHeader/>
      <PropertyComparison/>
      <AbFooter/>
      <Footer/>
    </div>
  )
}

export default ComparePage
