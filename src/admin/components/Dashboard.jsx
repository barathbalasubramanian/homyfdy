import React from 'react';
import Noti from './Noti';
import TotalProperties from './TotalProperties';
import StatCard from './StatCard';
import TotalBookings from './TotalBookings';

function Dashboard() {
 
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
                    <h1 className="self-start text-3xl font-medium leading-none">Dashboard</h1>
                    <p className="mt-1.5 text-lg leading-tight">Welcome homyfyd Admin!</p>
                  </header>
                </div>
              </div>
            </div>

            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                  <TotalProperties />
                  <div className="mt-8 w-full max-md:mr-0.5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                      <StatCard
                        title="Properties listed"
                        value="2,345"
                        target="3k/month"
                        percentage="60"
                        color="#F07B3F"
                      />
                      <StatCard
                        title="Customers"
                        value="2,345"
                        target="1k/month"
                        percentage="78"
                        color="#635BFF"
                      />
                    </div>
                  </div>
                </div>
                <TotalBookings />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
