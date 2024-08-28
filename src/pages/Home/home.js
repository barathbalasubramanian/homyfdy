import React, { useEffect, useState } from 'react'
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
import Welcome from './components/Welcome'
import { getAllHouses } from '../../firebase/house'

function Home() {

  const [properties, setProperties] = useState([]);
    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const fetchedProperties = await getAllHouses();
                setProperties(fetchedProperties);
            } catch (error) {
                console.error("Error fetching properties: ", error);
            }
        };
        fetchProperties();
    }, []);

  return (
    <div>
      <Header/>
      <Welcome/>
      <FeaturedProperties property={properties}/>
      <Partners/>
      <FeaturedProperties property={properties}/>
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
