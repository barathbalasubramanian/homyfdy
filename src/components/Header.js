import React, { useState } from 'react';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleUserClick = () => {
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: 'var(--blackhd)' }}>
      <div className='w-full flex px-8 items-center justify-between py-4 max-md:px-3'>
        <div className='flex items-center'>
          <img src="/assets/logo.svg" alt="Logo" style={{ width: '50px' }} />
          HOMYFDY
        </div>
        <div className='cursor-pointer hidden max-md:flex'>
          <img src="/assets/ham.svg" alt="Ham" />
        </div>
        <div className='max-md:hidden cursor-pointer flex gap-6'>
          <div onClick={()=>navigate('/')}>Home</div>
          <div onClick={()=>navigate('/about')}>About Us</div>
          <div onClick={()=>navigate('/properties')}>Properties</div>
          <div onClick={()=>navigate('/')}>Services</div>
        </div>
        <div className='max-md:hidden flex gap-6 items-center'>
          <div
            className='cursor-pointer bg-green-600 shadow-[0px_0px_21px_rgba(31,200,39,1)] flex items-center gap-3 px-2 py-1'
            style={{borderRadius: '5px' }}
          >
            <div className='flex items-center'>
              <img src="/assets/arr.svg" style={{ width: '24px' }} alt="Arr" />
            </div>
            <div className='text-sm' onClick={()=>navigate('/compare')}>Compare</div>
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
