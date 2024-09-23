import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AbFooter from '../../components/AbFooter';
import Ques from '../Home/components/Ques';
import FeaturedProperties from '../Home/components/FeaturedProperties';
import PropertyCon from './components/PropertyCon';
import { useParams } from 'react-router-dom';
import { getAllHouses, getHouse } from '../../firebase/house';
import { getManagerDataByName } from '../../firebase/RelationshipManagers';

function PropertyDetails() {

  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [properties, setProperties] = useState([]);
  const [managerDet, setmanagerDet] = useState([]);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const pro = await getHouse(id);
        const managername = pro.manager
        const managerDetails = await getManagerDataByName(managername);
        setmanagerDet(managerDetails)
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
        property && <PropertyCon property={property} managerDet={managerDet}/>
      }
      <div>
        <FeaturedProperties number={"three"} buttons={[]} property={properties} /> 
      </div>
      <Ques />
      <AbFooter />
      <Footer />
    </div>
  );
}

export default PropertyDetails;