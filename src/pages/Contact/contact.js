import Cookies from 'js-cookie';
import AbFooter from '../../components/AbFooter';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import React, { useEffect, useState } from 'react';
import CommonContact from './components/CommonContact';
import MainContainer from './components/MainContainer';
import { getUserDetails_ } from '../../firebase/user';

function Profile() {
  const [userData, setUserData] = useState({
    name: '',
    number: '',
    email: '',
    likes: 0,
    booksCnt: 0,
    viewCnt: 0,
  });

  const fetchUserData = async () => {
    const name = Cookies.get('name');
    const email = Cookies.get('email');
    const userDoc = await getUserDetails_(name, email);
    if (userDoc) {
      setUserData({
        id: userDoc.id || "",
        name: userDoc.data.name || '',
        number: userDoc.data.number || '',
        city: userDoc.data.city || "",
        email: userDoc.data.email || '',
        likes: userDoc.data.likes || 0,
        booksCnt: userDoc.data.bookings || 0,
        viewCnt: userDoc.data.visits || 0,
      });
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <Header />
      <CommonContact name={userData.name} email={userData.email}/>
      <MainContainer 
        id={userData.id}
        name={userData.name}
        number={userData.number}
        email={userData.email}
        city={userData.city}
        likes={userData.likes} 
        booksCnt={userData.booksCnt} 
        viewCnt={userData.viewCnt} 
      />
      <AbFooter />
      <Footer />
    </div>
  );
}

export default Profile;
