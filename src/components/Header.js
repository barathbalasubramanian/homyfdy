import React, { useEffect, useRef, useState } from 'react';
import Login from './Login';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import CompareDiv from './CompareDiv';
import ComparePage from './ComparePage';
import LoginDiv from './LoginDivCon';
import { getUserDetails_ } from '../firebase/user';
import { getAllHouses } from '../firebase/house';

function Header({isAuthenticated}) {

  console.log(isAuthenticated)
  const location = useLocation();
  const isComparePage = location.pathname === '/compare';
  const [isLoginOpen, setIsLoginOpen] = useState(isAuthenticated === undefined ? null : !isAuthenticated);
  const [CmpBtn,SetCmpBtn] = useState(false);
  const [CmpPage,setCmpPage] = useState(false)
  const [CmpCnt,setCmpCnt] = useState(0);
  const [properties, setProperties] = useState([]);
  const [LoginDivv, setLoginDiv] = useState(false);
  const [AuthStatus, setAuthStatus] = useState("");
 
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
          // setIsLoginOpen(true);
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
        console.error('Error fetching protected data:', error);
        // Need to change when production
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
  }, [])

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  const handleAuth = () => {
      const token = Cookies.get("token")
      if (token == undefined) {
          setLoginDiv(!LoginDivv)
      }
      else {navigate('/profile');return}
  } 

  const navigate = useNavigate();
  const [MobileNav, SetMobileNav] = useState(false)
  return (
    <div style={{ backgroundColor: 'var(--blackhd)' }}>
      <div className='w-full flex px-8 items-center justify-between py-4 max-md:px-3'>
        <div className='averoxfont flex items-center' onClick={()=>navigate('/')}>
          <img src="/assets/logo.svg" alt="Logo" style={{ width: '50px' }} />
          HOMYFYD
        </div>
        <div className='relative cursor-pointer hidden max-md:flex' onClick={() => {
              SetMobileNav(!MobileNav); 
              if (CmpBtn) {
                SetCmpBtn(false)
              }
          }}>
          <img src="/assets/ham.svg" alt="Ham" />
          {
            MobileNav && (
              <div className={`px-4 py-8 text-black flex flex-col gap-3 bg-white absolute top-8 right-3 rounded-xl transition-all duration-500 
                ${MobileNav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'}`}>
                <div onClick={() => navigate('/')}>Home</div>
                <div onClick={() => navigate('/about')}>About Us</div>
                <div onClick={() => navigate('/properties')}>Properties</div>
                <div className='cursor-pointer bg-green-600 text-white flex items-center gap-3 px-4 py-1' style={{borderRadius: '5px' }}  onClick={()=>{SetMobileNav(false);SetCmpBtn(!CmpBtn)}}>
                  <div className='text-sm' >Compare</div>
                </div>
                <div className='cursor-pointer bg-neutral-700 text-white flex items-center gap-3 px-4 py-1' style={{borderRadius: '5px' }} onClick={handleAuth}>
                  <div className='text-sm' >Profile</div>
                </div>
              </div>
            )
          }
        </div>
        <div className='max-md:hidden cursor-pointer flex gap-10'>
          <div onClick={()=>navigate('/')}>Home</div>
          <div onClick={()=>navigate('/about')}>About Us</div>
          <div onClick={()=>navigate('/properties')}>Properties</div>
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
          <div className='cursor-pointer' 
            onClick={handleAuth}
            >
            <img src="/assets/user.svg" alt="User" width={35} />
          </div>
        </div>
      </div>
      {
        CmpBtn && 
          <div className='absolute top-16 right-3 max-md:top-20'>
            <CompareDiv setCmpPage={setCmpPage} CmpCnt={CmpCnt} SetCmpBtn={SetCmpBtn}/>
          </div>
      }
      {
        CmpPage && 
        <div className='absolute top-16 right-3'>
          <ComparePage property={properties} setCmpPage={setCmpPage} setCmpCnt={setCmpCnt} CmpCnt={CmpCnt}/>
        </div>
      }

      {isLoginOpen && 
          <LoginDiv setAuthStatus={setAuthStatus} setIsLoginOpen={setIsLoginOpen} setLoginDiv={setLoginDiv} />
      }
      {LoginDivv && <LoginDiv setAuthStatus={setAuthStatus} setIsLoginOpen={setIsLoginOpen} setLoginDiv={setLoginDiv} /> }
    </div>
  );
}

export default Header;
