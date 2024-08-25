import React, { useState } from 'react';
import Sidebar from './components/SideBar';
import UserDashboard from './components/UserDashBoard';
import Property from './components/Property';
import FAQs from './components/FAQs';
import Blogs from './components/Blogs';
import Bookings from './components/Bookings';
import Responses from './components/Response';
import Dashboard from './components/Dashboard';

function Admin() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='w-full flex min-h-screen bg-green-50'>
      <div className='w-1/5 min-h-screen bg-white max-md:hidden'>
        <Sidebar activeIndex={activeIndex} onSetActiveIndex={setActiveIndex} />
      </div>
      <div className='w-4/5 max-md:w-full min-h-screen bg-green-50 max-h-screen overflow-scroll'>
        {activeIndex === 0 && <Dashboard />}
        {activeIndex === 1 && <UserDashboard/>}
        {activeIndex === 2 && <Responses/>}
        {activeIndex === 3 && <Property/>}
        {activeIndex === 4 && <Bookings/>}
        {activeIndex === 5 && <FAQs/>}
        {activeIndex === 6 && <Blogs/>}
      </div>
    </div>
  );
}

export default Admin;
