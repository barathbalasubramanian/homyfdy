import React, { useEffect, useState } from 'react';
import Login from './Login';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import CompareDiv from './CompareDiv';
import ComparePage from './ComparePage';
import { getUserDetails_ } from '../firebase/user';
import { getAllHouses } from '../firebase/house';

function Header() {

  const location = useLocation();
  const isComparePage = location.pathname === '/compare';
  const [isLoginOpen, setIsLoginOpen] = useState(null);
  const [CmpBtn,SetCmpBtn] = useState(false);
  const [CmpPage,setCmpPage] = useState(false)
  const [CmpCnt,setCmpCnt] = useState(0);
  const [properties, setProperties] = useState([]);
  useEffect(() => {
        const fetchProperties = async () => {
            try {
                const fetchedProperties = await getAllHouses();
                setProperties(fetchedProperties);
            } catch (error) {
                console.error("Error fetching properties: ", error);
            }
        };
        fetchProperties();
  }, []);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = Cookies.get('token');
        if (!token) {
          setIsLoginOpen(true);
          return;
        }
        const response = await axios.get('https://homyfdy-backend-1.onrender.com/protected', {
          headers: {
            Authorization: token,
          },
        });
        if (response.status === 200) {
          setIsLoginOpen(false);
        } else {
          setIsLoginOpen(true);
        }
      } catch (error) {
        const allCookies = Cookies.get();
          for (const cookie in allCookies) {
            Cookies.remove(cookie);
        }
        console.error('Error fetching protected data:', error);
        setIsLoginOpen(true);
      }
    };
    const fetchProperties = async () => {
      try {
        const name = Cookies.get("name");
        const email = Cookies.get("email");
        const userDoc = await getUserDetails_(name, email);
        setCmpCnt(userDoc.data.compareProperties?.length | 0)
      } catch (error) {}      
    };
      
    fetchProperties();
    verifyToken();
  }, []);

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
        <div className='z-50 relative max-md:hidden flex gap-6 items-center'>
          {
            !isComparePage &&
            <div
              className='cursor-pointer bg-green-600 shadow-[0px_0px_21px_rgba(31,200,39,1)] flex items-center gap-3 px-2 py-1'
              style={{borderRadius: '5px' }} 
              onClick={
                ()=>{
                  SetCmpBtn(!CmpBtn)
                }
              }
            >
              <div className='flex items-center'>
                <img src="/assets/arr.svg" style={{ width: '24px' }} alt="Arr" />
              </div>
              <div className='text-sm' >Compare</div>
            </div>
          }
          {
             CmpBtn && 
            <div className='absolute top-16 right-3'>
              <CompareDiv setCmpPage={setCmpPage} CmpCnt={CmpCnt}/>
            </div>
          }
          {
            CmpPage && 
            <div className='absolute top-16 right-3'>
              <ComparePage property={properties} setCmpPage={setCmpPage} setCmpCnt={setCmpCnt} CmpCnt={CmpCnt}/>
            </div>
          }
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
