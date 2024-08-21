import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AbFooter from '../../components/AbFooter'
import PlayStore from '../Home/components/PlayStore'
import Ques from '../Home/components/Ques'
import Clients from '../Home/components/Clients'
import Options from '../Home/components/Options'
import FeaturedProperties from '../Home/components/FeaturedProperties'
import Partners from '../Home/components/Partners'
import HomyfydAdvantage from './components/HomyfdyAdv'

function Home() {
  return (
    <div>
      <Header/>
      <FeaturedProperties/>
      <Partners/>
      <FeaturedProperties/>
      <HomyfydAdvantage/>
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
