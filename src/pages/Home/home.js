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
import Blogs from './components/Blogs'
import FeaturedProperties1 from './components/FeaturedProperties1'

function Home() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [buttonValue, setbuttonValue] = useState(null)
  const [butonValue1, setbuttonValue1] = useState(null)
  const [buttonValueFilterProperty, setbuttonValueFilterProperty] = useState([])
  const [buttonValue1FilterProperty, setbutton1ValueFilterProperty] = useState([])
  const [filters, setFilters] = useState({
    location: '',
    propertyType: '',
    priceRange: ''
  });

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const fetchedProperties = await getAllHouses();
        setProperties(fetchedProperties);
        setFilteredProperties(fetchedProperties);
        setbutton1ValueFilterProperty(fetchedProperties)
        setbuttonValueFilterProperty(fetchedProperties)
      } catch (error) {
        console.error("Error fetching properties: ", error);
      }
    };
    fetchProperties();
  }, []);

  const handleFilter = (location, propertyType, priceRange) => {
    const filtered = properties.filter(property => {
      const normalizedPropertyRegion = property.region.toLowerCase().replace(/\s+/g, '');
      const normalizedLocation = location.toLowerCase().replace(/\s+/g, '');
      const matchLocation = location ? normalizedPropertyRegion === normalizedLocation : true;
      const matchType = propertyType ? property.propertyType.toLowerCase().trim() === propertyType.toLowerCase().trim() : true;
      const matchPrice = priceRange ? matchPriceRange(property.propertyPrice, priceRange) : true;
  
      return matchLocation && matchType && matchPrice;
    });
    setFilteredProperties(filtered);
    setbuttonValueFilterProperty(filtered)
    setbutton1ValueFilterProperty(filtered)
  };
  

  const matchPriceRange = (price, range) => {
    if (range === "0-100k") return price <= 100000;
    if (range === "100k-500k") return price > 100000 && price <= 500000;
    if (range === "500k-1M") return price > 500000 && price <= 1000000;
    if (range === "1M+") return price > 1000000;
    return true;
  };

  const buttons = [
    { name: 'Apartments' },
    { name: 'Plots' },
    { name: 'Villas' },
  ]
  const buttons1 = [
    { name: 'Homyfyd Reliable' },
    { name: 'Hot Projects' },
    { name: 'Newly Launched' },
  ]

  useEffect(() => {
    const fetchProperties = async () => {
      console.log(filteredProperties)
      try {
        const fetchedProperties_ = filteredProperties.filter(property => {
          console.log(property.propertyReliable.toLowerCase().trim() , butonValue1.toLowerCase().trim())
          const matchType = property.propertyReliable.toLowerCase().trim() === butonValue1.toLowerCase().trim();
          return matchType;
        });
        setbutton1ValueFilterProperty(fetchedProperties_);
      } catch (error) {
        console.error("Error fetching properties: ", error);
      }
    };
    if (butonValue1) {
      fetchProperties();
    }
  }, [butonValue1]);

  useEffect(() => {
    const fetchProperties = async () => {
      console.log(filteredProperties)
      try {
        const fetchedProperties_1 = filteredProperties.filter(property => {
          console.log(property.propertyType.toLowerCase().trim(),buttonValue.toLowerCase().trim())
          const matchType = property.propertyType.toLowerCase().trim() === buttonValue.toLowerCase().trim();
          return matchType;
        });
        setbuttonValueFilterProperty(fetchedProperties_1);
      } catch (error) {
        console.error("Error fetching properties: ", error);
      }
    };
    if (buttonValue) {
      fetchProperties();
    }
  }, [buttonValue]);

  return (
    <div>
      <Header />
      <Welcome onFilter={handleFilter} filters={filters} setFilters={setFilters} />
      <FeaturedProperties1 property={buttonValue1FilterProperty} buttons1={buttons1} setbuttonValue1={setbuttonValue1}/>
      <Partners />
      <FeaturedProperties property={buttonValueFilterProperty} buttons={buttons} setbuttonValue={setbuttonValue}/>
      <HomyfydAdvantage />
      <Options />
      <Clients />
      <Blogs/>
      <Ques />
      <PlayStore />
      <AbFooter />
      <Footer />
    </div>
  );
}

export default Home;
