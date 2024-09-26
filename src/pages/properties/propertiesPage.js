import AbFooter from '../../components/AbFooter';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import React, { useEffect, useState } from 'react';
import PropertyHeader from './components/PropertyHeader';
import SearchBar from './components/SearchBar';
import FilterOptions from './components/FilterOptions';
import Head from './components/Head';
import { getAllHouses } from '../../firebase/house';
import { useLocation } from 'react-router-dom';

function PropertiesPage() {

  const [propertyNames, setPropertyNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const bhkType = location.state?.bhkType || 'BHK Type'; 
  const Location = location.state?.location || ''; 
  const propertyType = location.state?.propertyType || ''; 
  const priceRange = location.state?.priceRange || ''; 

  useEffect(() => {

    if (bhkType !== 'BHK Type') {
      setFilters((prevFilters) => ({
        ...prevFilters,
        ['BHK Type']: bhkType
      }));
    }
    if (Location !== '') {
       console.log("Location1")
      setFilters((prevFilters) => ({
        ...prevFilters,
        ['Location']: Location
      }));
    }
    if (propertyType !== '') {
       console.log("Location2")
      setFilters((prevFilters) => ({
        ...prevFilters,
        ['Property Type']: propertyType
      }));
    }
    if (priceRange !== '') {
      console.log("Location3")      
      setFilters((prevFilters) => ({
        ...prevFilters,
        ['Pricing Range']: priceRange
      }));
    }
  }, []);

  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [propertyName, setPropertyName] = useState("");
  const [filters, setFilters] = useState({});

  const filterKeyMapping = {
    "Location": "region",
    "Property Type": "propertyType",
    "Pricing Range": "propertyPrice",
    "Build Year": "buildYear",
    "Property Size": "area",
    "BHK Type": "propertyBHK"
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const fetchedProperties = await getAllHouses();
        const propertyNames = fetchedProperties.map(property => property.propertyName);
        setPropertyNames(propertyNames);
        setProperties(fetchedProperties);
        setFilteredProperties(fetchedProperties); // Initialize filtered properties
      } catch (error) {
        console.error("Error fetching properties: ", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    fetchProperties();
  }, []);

  // Handle filter changes
  const handleFilterChange = (filterType, selectedValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: selectedValue
    }));
  };

  // Match price range logic
  const matchPriceRange = (price, range) => {
    if (range === "0-100k") return price <= 100000;
    if (range === "100k-500k") return price > 100000 && price <= 500000;
    if (range === "500k-1M") return price > 500000 && price <= 1000000;
    if (range === "1M+") return price > 1000000;
    return true;
  };

  // Match area range logic
  const matchAreaRange = (area, range) => {
    if (range === "0-1000") return area <= 1000;
    if (range === "1000-5000") return area > 1000 && area <= 5000;
    if (range === "5000-10000") return area > 5000 && area <= 10000;
    if (range === "10000+") return area > 10000;
    return true;
  };

  // Filter properties based on search term and filter options
  useEffect(() => {
    let filtered = properties;

    // Filter by property name (if search term is provided)
    if (propertyName) {
      filtered = filtered.filter((property) =>
        property.propertyName.toLowerCase().includes(propertyName.toLowerCase())
      );
    }

    // Apply each filter type
    Object.keys(filters).forEach((filterType) => {
      const filterValue = filters[filterType];
      const propertyKey = filterKeyMapping[filterType];

      if (filterType === "Pricing Range") {
        // Use the matchPriceRange logic for price filtering
        if (filterValue && filterValue !== filterType) {
          filtered = filtered.filter((property) =>
            matchPriceRange(property[propertyKey], filterValue)
          );
        }
      } else if (filterType === "Property Size") {
        // Use the matchAreaRange logic for area filtering
        if (filterValue && filterValue !== filterType) {
          filtered = filtered.filter((property) =>
            matchAreaRange(property[propertyKey], filterValue)
          );
        }
      } else if (filterValue && filterValue !== filterType) {
        filtered = filtered.filter((property) => {
          const formattedPropertyValue = property[propertyKey]?.toString().toLowerCase().replace(/\s+/g, ''); // remove spaces
          const formattedFilterValue = filterValue.toLowerCase().replace(/\s+/g, ''); // remove spaces
          return formattedPropertyValue.includes(formattedFilterValue);
        });
      }
    });
    setFilteredProperties(filtered);
  }, [propertyName, filters, properties]);

  return (
    <div>
      <Header />
      <Head />
      <div className="searchbar -z-30 relative flex flex-col items-center px-20 w-full max-md:px-5 max-md:max-w-full">
        <div className='absolute -top-10 max-md:top-10 flex flex-col items-center w-4/5 max-md:w-full max-md:px-3'>
          <SearchBar setpropertyName={setPropertyName} propertyNames={propertyNames} />
          <FilterOptions onFilterChange={handleFilterChange} bhkType={bhkType} Location={Location} propertyType={propertyType} priceRange={priceRange}/>
        </div>
      </div>
      
      {/* Conditional Rendering for Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <div className="loader">Loading...</div> {/* Custom loader component or CSS spinner */}
        </div>
      ) : (
        <PropertyHeader properties={filteredProperties} />
      )}
      
      <AbFooter />
      <Footer />
    </div>
  );
}

export default PropertiesPage;
