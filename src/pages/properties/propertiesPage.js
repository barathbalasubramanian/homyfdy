import AbFooter from '../../components/AbFooter'
import Footer from '../../components/Footer'
import Header from '../..//components/Header'
import React from 'react'
import PropertyHeader from './components/PropertyHeader'
import SearchBar from './components/SearchBar'
import FilterOptions from './components/FilterOptions'
import Head from './components/Head'

function PropertiesPage() {
  return (
    <div>
      <Header/>
      <Head/>
      <div style={{minHeight:"35vh"}} className="relative flex flex-col items-center px-20 w-full max-md:px-5 max-md:max-w-full">
        <div className='absolute -top-10  flex flex-col items-center w-4/5'>
          <SearchBar />
          <FilterOptions />
        </div>
      </div>
      <PropertyHeader/>
      <AbFooter/>
      <Footer/>
    </div>
  )
}

export default PropertiesPage
