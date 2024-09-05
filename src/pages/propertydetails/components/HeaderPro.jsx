import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import { getUserDetails_, updateUser } from '../../../firebase/user';

function ProHeader({ property }) {
  const [iconStates, setIconStates] = useState({
    like: false,
    compare: false,
    share: false,
  });

  const [userDoc, setUserDoc] = useState(null);

  const locationBadges = [
    { location: property.region, iconSrc: '/assets/location.svg' },
  ];

  const iconButtons = [
    { id: 'like', src: iconStates.like ? '/assets/inlike.svg' : '/assets/like.svg' },
    { id: 'compare', src: iconStates.compare ? '/assets/incompare.svg' : '/assets/compare.svg' },
    { id: 'share', src: iconStates.share ? '/assets/inshare.svg' : '/assets/share.svg' }
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      const name = Cookies.get("name");
      const email = Cookies.get("email");
      const fetchedUserDoc = await getUserDetails_(name, email);
      setUserDoc(fetchedUserDoc);

      // Handle likes state
      if (fetchedUserDoc?.data?.likes) {
        const hasLiked = fetchedUserDoc.data.likes.some(visit => visit.propertyId === property.id);
        if (hasLiked) {
          setIconStates(prev => ({ ...prev, like: true }));
        }
      }

      // Handle compare state
      if (fetchedUserDoc?.data?.compareProperties) {
        const isCompared = fetchedUserDoc.data.compareProperties.some(visit => visit.propertyId === property.id);
        if (isCompared) {
          setIconStates(prev => ({ ...prev, compare: true }));
        }
      }
    };

    fetchUserData();
  }, [property.id]);

  const handleIconToggle = async (iconId, typeKey, dataKey) => {
    if (!userDoc) return; // Ensure userDoc is available

    const currentVisit = { propertyId: property.id, timestamp: new Date().toISOString() };
    let updatedData;

    const existingIndex = userDoc?.data?.[dataKey]?.findIndex(visit => visit.propertyId === property.id) ?? -1;

    if (existingIndex !== -1) {
      setIconStates(prev => ({ ...prev, [iconId]: false }));
      userDoc.data[dataKey].splice(existingIndex, 1); // Remove entry
      updatedData = { [dataKey]: userDoc.data[dataKey] };
    } else {
      setIconStates(prev => ({ ...prev, [iconId]: true }));
      userDoc.data[dataKey] = userDoc.data[dataKey] ? [...userDoc.data[dataKey], currentVisit] : [currentVisit];
      updatedData = { [dataKey]: userDoc.data[dataKey] };
    }

    await updateUser(userDoc.id, updatedData);
  };

  const handleIconClick = (iconId) => {
    switch (iconId) {
      case 'like':
        handleIconToggle('like', 'like', 'likes');
        break;
      case 'compare':
        handleIconToggle('compare', 'compare', 'compareProperties');
        break;
      case 'share':
        console.log('Share is clicked');
        break;
      default:
        break;
    }
  };

  return (
    <section className="flex flex-wrap gap-5 justify-between self-stretch ml-3.5 w-full max-md:max-w-full">
      <div className="flex gap-5 my-auto text-white">
        <h1 className="grow text-2xl font-semibold capitalize">{property.propertyType}</h1>
        <div className="flex flex-col text-sm font-medium whitespace-nowrap">
          {locationBadges.map((badge, index) => (
            <div key={index}>
              <div className="flex gap-1 items-center p-2 rounded-md border border-solid border-neutral-800">
                <img loading="lazy" src={badge.iconSrc} alt="Location Icon" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                <div className="self-stretch my-auto">{badge.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-6 items-center whitespace-nowrap">
        {iconButtons.map((button) => (
          <button key={button.id} onClick={() => handleIconClick(button.id)} className="p-0 border-0 bg-transparent cursor-pointer">
            <img loading="lazy" src={button.src} alt={button.id} className="object-contain shrink-0 self-stretch my-auto w-11 aspect-square" />
          </button>
        ))}
        <div className="flex flex-col self-stretch">
          <div className="text-sm font-medium text-neutral-400">Price</div>
          <div className="text-xl font-semibold text-white">${property.propertyPrice}</div>
        </div>
      </div>
    </section>
  );
}

export default ProHeader;
