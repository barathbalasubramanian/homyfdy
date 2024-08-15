import React, { useState } from 'react';
import Login from './Login';

function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleUserClick = () => {
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    <div style={{ backgroundColor: 'var(--blackhd)' }}>
      <div className='w-full flex px-8 items-center justify-between py-4'>
        <div className='flex items-center'>
          <img src="/assets/logo.svg" alt="Logo" style={{ width: '50px' }} />
          HOMYFDY
        </div>
        <div className='cursor-pointer flex gap-6'>
          <div>Home</div>
          <div>About Us</div>
          <div>Properties</div>
          <div>Services</div>
        </div>
        <div className='flex gap-6 items-center'>
          <div
            className='cursor-pointer flex items-center gap-3 px-2 py-1'
            style={{ backgroundColor: 'var(--green)', borderRadius: '5px' }}
          >
            <div className='flex items-center'>
              <img src="/assets/arr.svg" style={{ width: '24px' }} alt="Arr" />
            </div>
            <div className='text-sm'>Compare</div>
          </div>
          <div className='cursor-pointer' onClick={handleUserClick}>
            <img src="/assets/user.svg" alt="User" width={35} />
          </div>
        </div>
      </div>

      {isLoginOpen && <Login closeLogin={closeLogin} />}
    </div>
  );
}

export default Header;
