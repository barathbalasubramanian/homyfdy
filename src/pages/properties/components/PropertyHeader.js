import React, { useEffect, useState } from 'react';
import PropertyCard from '../../../components/PropertyCard';
import { getAllHouses } from '../../../firebase/house';

function PropertyHeader({properties}) {

  return (
    <div>
      <div className='px-20 py-16 max-md:px-3 max-md:py-10'>
        <div className='text-4xl pb-2'>FIND MY DREAM PROPERTY</div>
        <div className='text-sm' style={{ color: "grey" }}>
          Welcome to Homyfyd, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life.
        </div>
      </div>

      <div>
        <div className='py-16 px-20 flex flex-wrap gap-2 gap-y-4 items-center justify-between max-md:px-3 max-md:py-10 max-md:justify-center'>
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} verbose={false}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertyHeader;
