import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AbFooter from '../../components/AbFooter'
import PlayStore from '../components/PlayStore'
import Ques from '../components/Ques'
import Clients from '../components/Clients'
import Options from '../components/Options'

function Home() {
  return (
    <div>
      <Header/>
      <Options/>
      <Clients/>
      <Ques/>
      <PlayStore/>
      <AbFooter/>
      <Footer/>
    </div>
  )
}

export default Home
