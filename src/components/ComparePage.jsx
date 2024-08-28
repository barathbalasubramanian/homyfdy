import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { getAllHouses } from '../firebase/house';
import PropertyCard from './PropertyCard'
import { getUserDetails_ } from '../firebase/user';

function ComparePage({property,setCmpPage,setCmpCnt,CmpCnt}) {

    return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', }}> 
        <div onClick={()=>setCmpPage(false)} className='max-md:hidden'>
            <div className='cursor-pointer absolute top-10 right-14 max-md:right-5' style={{ width: "14px", height: "14px", borderRadius: "50%", backgroundColor: "crimson" }}></div>
        </div>
        <div className='py-16 px-20 flex flex-wrap gap-2 gap-y-4 items-center justify-between max-md:px-3 max-md:py-10 max-md:justify-center'>
            {property.map((property, index) => (
                <PropertyCard key={index} property={property} verbose={false} fromComparePage={true} setCmpCnt={setCmpCnt} CmpCnt={CmpCnt}/>
            ))}
        </div>
    </div>
  )
}

export default ComparePage
