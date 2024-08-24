import React from 'react';
import Noti from './Noti';

function Bookings() {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      registrationDate: '2024-08-01',
      city: 'New York',
      phoneNumber: '+1 123-456-7890',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      registrationDate: '2024-07-25',
      city: 'Los Angeles',
      phoneNumber: '+1 098-765-4321',
      email: 'jane.smith@example.com',
    },
    {
      id: 3,
      name: 'Mark Johnson',
      registrationDate: '2024-08-10',
      city: 'Chicago',
      phoneNumber: '+1 234-567-8901',
      email: 'mark.johnson@example.com',
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
                    <h1 className="self-start text-3xl font-medium leading-none">Property Booking</h1>
                    <p className="mt-1.5 text-lg leading-tight">List of Booked Properties</p>
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

          {/* User List */}
          <div className="flex flex-col w-full text-black bg-white mt-6 rounded-lg shadow-sm">
            <div className="flex w-full bg-green-100 p-4 font-bold text-lg border-b-2 border-gray-200">
              <div className="w-1/5 text-[16px]">Name</div>
              <div className="w-1/5 text-[16px]">Registration Date</div>
              <div className="w-1/5 text-[16px]">City</div>
              <div className="w-1/5 text-[16px]">Phone Number</div>
              <div className="w-1/5 text-[16px]">Email</div>
            </div>
            {users.map((user) => (
              <div key={user.id} className="flex items-center w-full p-4 border-b border-gray-200">
                <div className="w-1/5 overflow-scroll text-[14px]">{user.name}</div>
                <div className="w-1/5 overflow-scroll text-[14px]">{user.registrationDate}</div>
                <div className="w-1/5 overflow-scroll text-[14px]">{user.city}</div>
                <div className="w-1/5 overflow-scroll text-[14px]">{user.phoneNumber}</div>
                <div className="w-1/5 overflow-scroll text-[14px]">{user.email}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Bookings;
