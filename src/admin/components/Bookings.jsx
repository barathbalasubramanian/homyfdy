import React, { useEffect, useState } from 'react';
import Noti from './Noti';
import { getAllBookings } from '../../firebase/booking';

function Bookings() {

  const [Bookings,SetBookings] = useState([]);
    const fetchBookings = async () => {
      try {
        const fetchedBookings = await getAllBookings();
        SetBookings(fetchedBookings);
        console.log(fetchedBookings);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    useEffect(() => {
      fetchBookings();
    }, []);

    const formatDateTime = (datetime) => {
      const date = new Date(datetime);
      const options = { 
        month: 'long', 
        day: '2-digit', 
        year: 'numeric', 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
      };
      return date.toLocaleString('en-US', options).replace(',', ' at');
    };
  
    return (
    <div className="overflow-hidden py-6 px-8 bg-green-50 max-md:pr-5 min-h-screen">
      <main className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col gap-8 w-full max-md:mr-2.5 max-md:max-w-full">
            <div className='flex items-center justify-between'>
              <div className="flex overflow-hidden flex-wrap gap-2 items-center px-3 w-1/2 text-xs leading-6 text-center text-gray-400 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid min-h-[40px] max-md:max-w-full">
                <img loading="lazy" src="/assets/search.svg" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
                <input type="text" placeholder="Search..." className="gap-0 self-stretch my-auto bg-transparent border-none focus:outline-none" aria-label="Search" />
              </div>
              <div>
                <Noti />
              </div>
            </div>
            <div className="flex flex-col max-md:max-w-full">
              <div className='flex w-full items-center justify-between'>
                <div>
                  <header className="flex flex-col self-start text-black ">
                    <h1 className="self-start text-3xl font-medium leading-none">Property Booking</h1>
                    <p className="mt-1.5 text-lg leading-tight">List of Booked Properties</p>
                  </header>
                </div>
                <div onClick={()=>fetchBookings()}>
                  <button className="self-end outline-none px-11 py-2 text-base text-white whitespace-nowrap bg-emerald-500 rounded-lg border border-solid border-emerald-500 border-opacity-80 shadow-[0px_2px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10">
                    Refresh
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* User List */}
          <div className="flex flex-col w-full text-black bg-white mt-6 rounded-lg shadow-sm">
            <div className="flex w-full bg-green-100 p-4 font-bold text-lg border-b-2 border-gray-200">
              <div className="w-1/6 text-center text-[16px]">Name</div>
              <div className="w-1/6 text-center text-[16px]">Phone Number</div>
              <div className="w-1/6 text-center text-[16px]">Email</div>
              <div className="w-1/6 text-center text-[16px]">Booking Date</div>
              <div className="w-1/6 text-center text-[16px]">Property name</div>
              <div className="w-1/6 text-center text-[16px]">Property Type</div>
            </div>
            {Bookings.map((user) => (
              <div key={user.id} className="flex items-center w-full p-4 border-b border-gray-200">
                <div className="w-1/6 text-center overflow-scroll text-nowrap mr-4 text-[14px]">{user.name}</div>
                <div className="w-1/6 text-center overflow-scroll text-nowrap mr-4 text-[14px]">{user.phoneNumber}</div>
                <div className="w-1/6 text-center overflow-scroll text-nowrap mr-4 text-[14px]">{user.email}</div>
                <div className="w-1/6 text-center overflow-scroll text-nowrap mr-4 text-[14px]">{formatDateTime(user.datetime)}</div>
                <div className="w-1/6 text-center overflow-scroll text-nowrap mr-4 text-[14px]">{user.propertyname}</div>
                <div className="w-1/6 text-center overflow-scroll text-nowrap mr-4 text-[14px]">{user.name}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Bookings;
