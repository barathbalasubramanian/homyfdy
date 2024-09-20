import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AbFooter from '../../components/AbFooter';
import Ques from '../Home/components/Ques';
import FeaturedProperties from '../Home/components/FeaturedProperties';
import PropertyCon from './components/PropertyCon';
import { useParams } from 'react-router-dom';
import { getAllHouses, getHouse } from '../../firebase/house';

function PropertyDetails() {

  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const pro = await getHouse(id);
        setProperty(pro);
      } catch (error) {
        console.error("Error fetching property: ", error);
      }
    };

    fetchProperty();
  }, [id]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const fetchedProperties = await getAllHouses();
        console.log(fetchedProperties)
        setProperties(fetchedProperties);
      } catch (error) {
        console.error("Error fetching properties: ", error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <Header />
      {
        property && <PropertyCon property={property} />
      }
      <div>
        <FeaturedProperties buttons={[]} property={properties} /> 
      </div>
      <Ques />
      <AbFooter />
      <Footer />
    </div>
  );
}

export default PropertyDetails;