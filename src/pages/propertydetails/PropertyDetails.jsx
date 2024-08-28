import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AbFooter from '../../components/AbFooter'
import Ques from '../Home/components/Ques'
import FeaturedProperties from '../Home/components/FeaturedProperties'
import PropertyCon from './components/PropertyCon'
import { useLocation } from 'react-router-dom'
import CustomForm from './components/BookingForm'
import { getAllHouses } from '../../firebase/house'

function PropertyDetails() {
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
        <FeaturedProperties property={properties}/> 
      </div>
      <Ques/>
      <AbFooter/>
      <Footer/>
    </div>
  )
}

export default PropertyDetails
