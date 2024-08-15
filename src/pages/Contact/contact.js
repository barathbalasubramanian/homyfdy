import AbFooter from '../../components/AbFooter'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import React from 'react'
import CommonContact from './components/CommonContact'
import MainContainer from './components/MainContainer'

function Contacts() {
  return (
    <div>
      <Header/>
      <CommonContact/>
      <MainContainer/>
      <AbFooter/>
      <Footer/>
    </div>
  )
}

export default Contacts
