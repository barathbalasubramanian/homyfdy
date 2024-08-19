import React from 'react'
import Header from '../../components/Header'
import AbFooter from '../../components/AbFooter'
import Footer from '../../components/Footer'
import JourneySection from './components/JourneySection'
import ValueCard from './components/ValuesCard'
import ValuesSection from './components/ValuesSection'
import TeamSection from './components/TeamSection'

function About() {
  return (
    <div>
      <Header/>
      <JourneySection/>
      <ValuesSection/>
      <TeamSection/>
      <AbFooter/>
      <Footer/>
    </div>
  )
}

export default About
