import React from 'react'
import PropertyCard from '../../../components/PropertyCard'

function PropertyHeader() {
  return (
    <div>
        <div className='px-20 py-16'>
            <div className='text-4xl pb-2'>FIND MY DREAM PROPERTY</div>
            <div className='text-sm' style={{color:"grey"}}>Welcome to Homyfyd, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey </div>
        </div>

        <div>
            <div>
             {/* <PropertyCard/> */}
            </div>
        </div>
    
    </div>
  )
}

export default PropertyHeader
