import React from 'react';
import Noti from './Noti';

function Responses() {
  
    const users = [
        {
            id: 1,
            name: "John Doe",
            phoneNumber: "123-456-7890",
            inquiryType: "Purchase",
            selectedProperty: "Villa Sunshine",
            siteVisit: "Yes",
            message: "Looking forward to the site visit.",
        },
        {
            id: 2,
            name: "Jane Smith",
            phoneNumber: "098-765-4321",
            inquiryType: "Rental",
            selectedProperty: "Oceanview Apartment",
            siteVisit: "No",
            message: "Please send more details about the property.",
        },
        {
            id: 3,
            name: "Michael Johnson",
            phoneNumber: "555-555-5555",
            inquiryType: "Lease",
            selectedProperty: "Downtown Office",
            siteVisit: "Yes",
            message: "Interested in leasing the office space.",
        },
    ];

    return (
    <div className="overflow-hidden py-6 px-8 bg-green-50 max-md:pr-5 min-h-screen">
      <main className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col gap-8 w-full max-md:mr-2.5 max-md:max-w-full">
            <div className='flex items-center justify-between'>
              <div className="flex overflow-hidden flex-wrap gap-2 items-center px-3 w-1/2 text-xs leading-6 text-center text-gray-400 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid min-h-[40px] max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/51a0430ee58a1c70a8bd7129382b322477b4e868f6106bd719ff31411841b3ec?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
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
                    <h1 className="self-start text-3xl font-medium leading-none">Responses</h1>
                    <p className="mt-1.5 text-lg leading-tight">List of Users</p>
                  </header>
                </div>
                <div>
                  <button className="self-end px-11 py-2 text-base text-white whitespace-nowrap bg-emerald-500 rounded-lg border border-solid border-emerald-500 border-opacity-80 shadow-[0px_2px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10">
                    Refresh
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full text-black bg-white mt-6 rounded-lg shadow-sm">
            <div className="flex w-full bg-green-100 p-4 font-bold text-lg border-b-2 border-gray-200">
              <div className="w-1/6 text-[16px]">Name</div>
              <div className="w-1/6 text-[16px]">Phone Number</div>
              <div className="w-1/6 text-[16px]">Inquiry Type</div>
              <div className="w-1/6 text-[16px]">Selected Property</div>
              <div className="w-1/6 text-[16px]">Site Visit</div>
              <div className="w-1/6 text-[16px]">Message</div>
            </div>
            {users.map((user) => (
              <div key={user.id} className="flex items-center w-full p-4 border-b border-gray-200">
                <div className="w-1/6 overflow-scroll text-[14px]">{user.name}</div>
                <div className="w-1/6 overflow-scroll text-[14px]">{user.phoneNumber}</div>
                <div className="w-1/6 overflow-scroll text-[14px]">{user.inquiryType}</div>
                <div className="w-1/6 overflow-scroll text-[14px]">{user.selectedProperty}</div>
                <div className="w-1/6 overflow-scroll text-[14px]">{user.siteVisit}</div>
                <div className="w-1/6 overflow-scroll text-[14px]">{user.message}</div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}

export default Responses;
