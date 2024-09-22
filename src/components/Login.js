import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { createUser } from '../firebase/user';
import Cookies from 'js-cookie';
import axios from 'axios';

function Login({ closeLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    city: '',
  });

  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [otpDiv, setOtpDiv] = useState(false);
  const [login, setLogin] = useState(false);
  const [errors, setErrors] = useState({});

  // Validate form inputs
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.number) formErrors.number = 'Phone number is required';
    if (!formData.city) formErrors.city = 'City is required';
    return formErrors;
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Generate a random 4-digit OTP
  const generateOtp = () => {
    return Math.floor(1000 + Math.random() * 9000).toString(); 
  };

  const sendOtp = async (number, otp) => {

    const apiURL = `https://trans.smsfresh.co/api/sendmsg.php?user=Anthill%20Networks&pass=123456&sender=Sender%20ID&phone=${number}&text=realtyotp&priority=wa&stype=auth&Params=${otp}`;
    
    try {
      await fetch(apiURL); 
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleCompareClick = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const generatedOtp = generateOtp();
      setGeneratedOtp(generatedOtp);
      await sendOtp(formData.number, generatedOtp);
      setOtpDiv(true);
    } else {
      setErrors(formErrors);
    }
  };

  const verifyOtp = async() => {
    if (otp === generatedOtp) {
      alert('OTP verified successfully!');
      const response = await axios.post('https://homyfdy-backend-1.onrender.com/auth/login', formData);
      const token = response.data.token;; 
      // Store user data in cookies
      Cookies.set('token', token, { expires: 7 });
      Cookies.set('name', formData.name, { expires: 7 });
      Cookies.set('number', formData.number, { expires: 7 });
      Cookies.set('email', formData.email, { expires: 7 });
      Cookies.set('city', formData.city, { expires: 7 });

      // Create user in Firebase (optional)
      await createUser({
        ...formData,
        registeredAt: Date.now(),
        visits: [],
        likes: [],
        favorites: [],
        compareProperties: [],
        bookings: []
      });
      
      // Storing user data in cookies
      Cookies.set('token', token, { expires: 7 });
      Cookies.set('name', formData.name, { expires: 7 });
      Cookies.set('number', formData.number, { expires: 7 });
      Cookies.set('email', formData.email, { expires: 7 });
      Cookies.set('city', formData.city, { expires: 7 });

      closeLogin();
    } else {
      alert('Incorrect OTP. Please try again.');
    }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className='login-con'>
        <div className='max-md:hidden'>
          <img src="/assets/login.svg" alt="Login" style={{ width: '30em', height: '30em', objectFit: 'contain' }} />
        </div>
        <div className='p-8 flex flex-col gap-4'>
          {/* OTP Verification Section */}
          {otpDiv ? (
            <div className='flex flex-col gap-3'>
              <div className='averoxfont text-3xl' style={{ color: "green" }}>HOMYFYD</div>
              <div className='text-xl w-1/3'>Verify your Mobile</div>
              <div style={{ color: "grey" }}>We have sent a 4-digit OTP to +91 {formData.number}</div>
              <div className='otp-box mt-3'>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderSeparator={<span>  </span>}
                  renderInput={(props) => <input {...props} />}
                />
              </div>
              <div onClick={verifyOtp} className='cursor-pointer mt-4 w-4/5 max-md:w-full text-center justify-center flex items-center gap-3 px-2 py-1' style={{ backgroundColor: 'var(--green)', borderRadius: '5px' }}>
                <div>Verify OTP</div>
              </div>
            </div>
          ) : (
            <>
              <div className='averoxfont text-3xl' style={{ color: "green" }}>HOMYFYD</div>
              {/* SignUp Form */}
              <div>
                <label htmlFor="name" className='text-sm text-white'>Enter your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className='input-div' style={{ color: 'grey' }} />
                {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
              </div>
              <div>
                <label htmlFor="email" className='text-sm text-white'>Enter your Email ID</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email ID" className='input-div' style={{ color: 'grey' }} />
                {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
              </div>
              <div>
                <label htmlFor="number" className='text-sm text-white'>Enter your Phone Number</label>
                <input type="text" name="number" value={formData.number} onChange={handleChange} required placeholder="Your Phone Number" className='input-div' style={{ color: 'grey' }} />
                {errors.number && <div style={{ color: 'red' }}>{errors.number}</div>}
              </div>
              <div>
                <label htmlFor="city" className='text-sm text-white'>Enter your City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required placeholder="Your City" className='input-div' style={{ color: 'grey' }} />
                {errors.city && <div style={{ color: 'red' }}>{errors.city}</div>}
              </div>
              <div className='cursor-pointer mt-4 w-4/5 max-md:w-full text-center justify-center flex items-center gap-3 px-2 py-1' style={{ backgroundColor: 'var(--green)', borderRadius: '5px' }} onClick={handleCompareClick}>
                <div>Continue</div>
              </div>
            </>
          )}
          <div onClick={closeLogin} className='cursor-pointer absolute top-0 right-0 max-md:right-5'><img src="assets/cancel.svg" alt="" className='w-6' /></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
