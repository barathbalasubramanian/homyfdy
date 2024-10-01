import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserDetails_, updateUser } from '../firebase/user';

const PropertyCard = React.memo(({ property, verbose, fromComparePage, setCmpCnt, CmpCnt, edit, setEdit, setDel }) => {

  const navigate = useNavigate();
  const [compareImg, setCompareImg] = useState("/assets/compare.svg");

  const handleDetail = () => {
    setDel(property.id)
  }

  useEffect(() => {
    if (fromComparePage) {
      const checkIfPropertyInCompareProperties = async () => {
        const name = Cookies.get("name");
        const email = Cookies.get("email");
        const userDoc = await getUserDetails_(name, email);

        if (userDoc.data.compareProperties) {
          const isInCompareProperties = userDoc.data.compareProperties.some(
            compare => compare.propertyId === property.id
          );

          setCompareImg(isInCompareProperties ? "/assets/incompare.svg" : "/assets/compare.svg");
        }
      };

      checkIfPropertyInCompareProperties();
    }
  }, [fromComparePage, property.id]);

  const handleViewDetails = async () => {
    const name = Cookies.get("name");
    const email = Cookies.get("email");
    console.log(name,email)
    if (name == undefined || email == undefined ) {
      alert("Login to continue")
    }
    const userDoc = await getUserDetails_(name, email);

    const currentVisit = {
      propertyId: property.id,
      timestamp: new Date().toISOString()
    };

    let updatedData;
    if (userDoc.data.visits) {
      const existingVisitIndex = userDoc.data.visits.findIndex(
        visit => visit.propertyId === property.id
      );
      if (existingVisitIndex !== -1) {
        userDoc.data.visits[existingVisitIndex].timestamp = currentVisit.timestamp;
      } else {
        userDoc.data.visits.push(currentVisit);
      }

      updatedData = { visits: userDoc.data.visits };
    } else {
      updatedData = { visits: [currentVisit] };
    }

    await updateUser(userDoc.id, updatedData);
    navigate(`/propertydetails/${property.id}`);
  };

  const handleCompareClick = async () => {
    const newCompareImg = compareImg === "/assets/compare.svg" ? "/assets/incompare.svg" : "/assets/compare.svg";
    setCompareImg(newCompareImg);
    await updateComparePropertiesInDatabase(newCompareImg === "/assets/incompare.svg");
  };

  const updateComparePropertiesInDatabase = async (isAdding) => {
    const name = Cookies.get("name");
    const email = Cookies.get("email");
    const userDoc = await getUserDetails_(name, email);

    const currComparePro = {
      propertyId: property.id,
      timestamp: new Date().toISOString(),
    };

    let updatedData;

    if (userDoc.data.compareProperties) {
      const existingCompareIndex = userDoc.data.compareProperties.findIndex(
        comparePro => comparePro.propertyId === property.id
      );

      if (isAdding) {
        if (existingCompareIndex === -1) {
          userDoc.data.compareProperties.push(currComparePro);
          setCmpCnt(CmpCnt + 1)
        }
      } else {
        if (existingCompareIndex !== -1) {
          userDoc.data.compareProperties.splice(existingCompareIndex, 1);
          setCmpCnt(CmpCnt - 1)
        }
      }

      updatedData = { compareProperties: userDoc.data.compareProperties };
    } else if (isAdding) {
      updatedData = { compareProperties: [currComparePro] };
    }

    if (updatedData) {
      await updateUser(userDoc.id, updatedData);
    }
  };

  return (
    <div key={property.id} className={`relative prop-con ${verbose ? 'bg-white' : ''}`} >
      {fromComparePage && (
        <div className='z-50 absolute top-8 left-8'>
          <img src={compareImg} onClick={handleCompareClick} className='cursor-pointer' alt="Property" />
        </div>
      )}
      <div className='flex items-center justify-center'><img src={property.MainImage} className='rounded-xl' alt="Property" /></div>
      <div>
        <div className='w-fit flex items-center justify-between'>
          <div className={`text-lg pr-2 ${!verbose ? 'text-white' : 'text-black'}`}>{property.propertyName}</div>
        </div>
        <div>
          <div className='text-sm text-neutral-500'>{property.propertyType}</div>
          <div> {property.propertyBHK} </div>
        </div>
        <div style={{ color: "grey" }}>
          <div className='truncate-text'>{property.description}</div>
          <span>Readmore</span>
        </div>
      </div>
      {!verbose && (
        <div className='flex items-center justify-between max-md:flex-wrap max-md:gap-2 max-md:items-start max-md:justify-start'>
          <div className='cursor-pointer flex items-center gap-3 px-4 py-1' style={{ fontSize: "12px", textWrap: "nowrap", border: "1px solid #262626", backgroundColor: "var(--blackhd)", borderRadius: "8px" }}>
            <img src="/assets/bed.svg" alt="Bed" /> {property.bedrooms}-Bedroom
          </div>
          <div className='cursor-pointer flex items-center gap-3 px-4 py-1' style={{ fontSize: "12px", textWrap: "nowrap", border: "1px solid #262626", backgroundColor: "var(--blackhd)", borderRadius: "8px" }}>
            <img src="/assets/bth.svg" alt="Bathroom" /> {property.bathrooms}-Bathroom
          </div>
          <div className='cursor-pointer flex items-center gap-3 px-4 py-1' style={{ fontSize: "12px", textWrap: "nowrap", border: "1px solid #262626", backgroundColor: "var(--blackhd)", borderRadius: "8px" }}>
            <img src="/assets/vila.svg" alt="Villa" /> {property.maxRooms}-Villa
          </div>
        </div>
      )}
      <div className='flex items-center justify-between'>
        <div>
          <div style={{ color: "grey", fontSize: "12px" }}>Price</div>
          <div className={`${!verbose ? 'text-white' : 'text-black'}`}>₹ {property.propertyPrice} k</div>
        </div>
        {
          edit &&
          <div className='text-black flex gap-10'>
            <div onClick={handleViewDetails} className='cursor-pointer hover:text-green-500 hover:scale-110 transform transition'>View</div>
            <div onClick={()=>{setEdit(property.id)}} className='cursor-pointer text-green-600 hover:text-neutral-500  hover:scale-110 transform transition'>Edit</div>
            <div onClick={handleDetail} className='cursor-pointer  hover:scale-110 transform transition'><img src="/assets/delete.svg" alt="" /></div>
          </div>
        }
        {
          !edit &&
          <div onClick={handleViewDetails} className='cursor-pointer border-none flex items-center w-fit bg-green-600 shadow-[0px_0px_21px_rgba(31,200,39,1)] gap-3 px-2 py-2' style={{ fontSize: "13px", textWrap: "nowrap", backgroundColor: "var(--green)", borderRadius: "5px" }}>
            <img src="/assets/vila.svg" alt="Details" /> View Property Details
          </div>
        }
      </div>
    </div>
  );
});

export default PropertyCard;
