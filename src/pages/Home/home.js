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

function Home() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
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
        setFilteredProperties(fetchedProperties); // Initially show all properties
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
  };
  

  const matchPriceRange = (price, range) => {
    if (range === "0-100k") return price <= 100000;
    if (range === "100k-500k") return price > 100000 && price <= 500000;
    if (range === "500k-1M") return price > 500000 && price <= 1000000;
    if (range === "1M+") return price > 1000000;
    return true;
  };

  return (
    <div>
      <Header />
      <Welcome onFilter={handleFilter} filters={filters} setFilters={setFilters} />
      <FeaturedProperties property={filteredProperties} />
      <Partners />
      <FeaturedProperties property={filteredProperties} />
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
