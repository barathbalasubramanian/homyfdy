import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import CompareHeader from './components/CompareHeader'
import AbFooter from '../../components/AbFooter'
import Footer from '../../components/Footer'
import PropertyComparison from './components/PropertyComparison'
import { getUserDetails_ } from '../../firebase/user'
import { getHouse } from '../../firebase/house'

function ComparePage() {

  const [PropertyData,setpropertyData] = useState([]);
  const [PropertyId,setpropertyId] = useState([]);
  useEffect(()=>{
    const fetchProperties = async () => {
      try {
        const name = Cookies.get("name");
        const email = Cookies.get("email");
        const userDoc = await getUserDetails_(name, email);
        for ( let [id,value] of Object.entries(userDoc.data.compareProperties)) 
        { 
          setpropertyId(prevProperties => [
            ...prevProperties,
            value['propertyId']
          ]);
        }
      } catch (error) {}      
    };
      
    fetchProperties();
  },[])

  useEffect(() => {
    const fetchPropertyData = async () => {
        const fetchPromises = PropertyId.map(propertyId => getHouse(propertyId));
        try {
          const data = await Promise.all(fetchPromises);
          console.log(data)
          setpropertyData(data);
        } catch (error) {
          console.error('Error fetching property data:', error);
        }
    };

    fetchPropertyData();
  }, [PropertyId]); 


  return (
    <div>
      <Header/>
      <CompareHeader/>
      <PropertyComparison PropertyData={PropertyData}/>
      <AbFooter/>
      <Footer/>
    </div>
  )
}

export default ComparePage
