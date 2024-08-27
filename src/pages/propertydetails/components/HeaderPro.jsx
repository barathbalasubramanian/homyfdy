import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { getUserDetails_, updateUser } from '../../../firebase/user';

function ProHeader({ property }) {
  const [iconStates, setIconStates] = useState({
    like: false,
    compare: false,
    share: false,
  });

  const locationBadges = [
    { location: property.region, iconSrc: '/assets/location.svg' },
  ];

  const iconButtons = [
    { id: 'like', src: iconStates.like ? '/assets/inlike.svg' : '/assets/like.svg' },
    { id: 'compare', src: iconStates.compare ? '/assets/incompare.svg' : '/assets/compare.svg' },
    { id: 'share', src: iconStates.share ? '/assets/inshare.svg' : '/assets/share.svg' }
  ];

  const handleViewDetails = async () => {
    const name = Cookies.get("name");
    const email = Cookies.get("email");
    const userDoc = await getUserDetails_(name, email);
    const currentVisit = {
      propertyId: property.id,
      timestamp: new Date().toISOString()
    };
    
    let updatedData;
    if (userDoc.data.likes) {
      const existingVisitIndex = userDoc.data.likes.findIndex(
        visit => visit.propertyId === property.id
      );
      if (existingVisitIndex !== -1) {
        userDoc.data.likes[existingVisitIndex].timestamp = currentVisit.timestamp;
      } else {
        userDoc.data.likes.push(currentVisit);
      }
      updatedData = { likes: userDoc.data.likes };
    } else {
        updatedData = { likes: [currentVisit] };
    }
    await updateUser(userDoc.id, updatedData);
  };

  const handleIconClick = (iconId) => {
    setIconStates((prevStates) => ({
      ...prevStates,
      [iconId]: !prevStates[iconId],
    }));
    
    switch (iconId) {
      case 'like':
        console.log('Like is clicked');
        handleViewDetails()
        break;
      case 'compare':
        console.log('Compare is clicked');
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
                <img loading="lazy" src={badge.iconSrc} alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                <div className="self-stretch my-auto">{badge.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-6 items-center whitespace-nowrap">
        {iconButtons.map((button, index) => (
          <button key={index} onClick={() => handleIconClick(button.id)} className="p-0 border-0 bg-transparent cursor-pointer">
            <img loading="lazy" src={button.src} alt="" className="object-contain shrink-0 self-stretch my-auto w-11 aspect-square" />
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

