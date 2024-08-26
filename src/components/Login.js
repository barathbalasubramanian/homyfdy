import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import { createUser } from '../firebase/user';
import axios from 'axios';
import Cookies from 'js-cookie';

function Login({ closeLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    city: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCompareClick = async () => {
    try {
      const response = await axios.post('https://homyfdy-backend-1.onrender.com/auth/login', formData);
      const tokenData = response.data;
      const token = response.data.token;
      Cookies.set('token', token, { expires: 7 })
      Cookies.set('name', formData.name, { expires: 7 });
      Cookies.set('number', formData.number, { expires: 7 });
      Cookies.set('email', formData.email, { expires: 7 });
      Cookies.set('city', formData.city, { expires: 7 });
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to submit data');
    }
    try {
      await createUser({
        ...formData,
        registeredAt: Date.now()
      });
    } catch (error) {
      alert(error);
    }
    setOtpDiv(true);
  };

  const [otp, setOtp] = useState('');
  const [otpDiv, setOtpDiv] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <div className='login-con'>
        <div className='max-md:hidden'>
          <img src="/assets/login.svg" alt="Login" style={{ width: '30em', height: '30em', objectFit: 'contain' }} />
        </div>
        <div className='p-8 flex flex-col gap-4'>

          {/* SignUp */}
          {/* OTP */}
          {otpDiv ?
            <div className='flex flex-col gap-3'>
              <div className='text-3xl' style={{ color: "green" }}>HOMYFYD</div>
              <div className='text-xl w-1/3'>Verify your Mobile</div>
              <div style={{ color: "grey" }}>We have sent A 5 Digit OTP on +91 0000000000</div>
              <div className='otp-box mt-3'>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderSeparator={<span>  </span>}
                  renderInput={(props) => <input {...props} />}
                />
              </div>
              <div className='text-sm mt-3' style={{ color: "grey" }}>00 : 20</div>
              <div className='text-sm cursor-pointer' style={{ color: "grey" }}>Didn't Receive Otp</div>
              <div onClick={closeLogin} className='cursor-pointer mt-4 w-4/5 text-center justify-center flex items-center gap-3 px-2 py-1' style={{ backgroundColor: 'var(--green)', borderRadius: '5px' }}>
                <div>Login</div>
              </div>
            </div> :
            <>
              <div className='text-3xl' style={{ color: "green" }}>HOMYFYD</div>
              <div>
                <label htmlFor="name" className='text-sm text-white'>
                  Enter your Name
                </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className='input-div' style={{ color: 'grey' }}
                />
              </div>
              <div>
                <label htmlFor="email" className='text-sm text-white'>
                  Enter your Email ID
                </label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email ID" className='input-div' style={{ color: 'grey' }}
                />
              </div>
              <div>
                <label htmlFor="number" className='text-sm text-white'>
                  Enter your Phone Number
                </label>
                <input type="text" name="number" value={formData.number} onChange={handleChange} required placeholder="Your Phone Number" className='input-div' style={{ color: 'grey' }}
                />
              </div>
              <div>
                <label htmlFor="city" className='text-sm text-white'> {/* Added city input field */}
                  Enter your City
                </label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required placeholder="Your City" className='input-div' style={{ color: 'grey' }}
                />
              </div>
              <div className='cursor-pointer mt-4 w-4/5 text-center justify-center flex items-center gap-3 px-2 py-1' style={{ backgroundColor: 'var(--green)', borderRadius: '5px' }} onClick={handleCompareClick}>
                <div>Continue</div>
              </div>
            </>
          }

          {
            login ?
              <div className='flex flex-col gap-3'>
                <div className='text-3xl' style={{ color: "green" }}>HOMYFYD</div>
                <div>
                  <label htmlFor="number" className='text-sm text-white'>
                    Enter your Phone Number
                  </label>
                  <input type="text" name="number" value={formData.number} onChange={handleChange} required placeholder="Your Phone Number" className='input-div' style={{ color: 'grey' }}
                  />
                </div>
                <div className='cursor-pointer mt-4 w-4/5 text-center justify-center flex items-center gap-3 px-2 py-1' style={{ backgroundColor: 'var(--green)', borderRadius: '5px' }} onClick={handleCompareClick}>
                  <div>Continue</div>
                </div>
              </div> : <></>
          }

          <div onClick={closeLogin} className='cursor-pointer absolute top-0 right-0 max-md:right-5' style={{ width: "14px", height: "14px", borderRadius: "50%", backgroundColor: "crimson" }}></div>
        </div>
      </div>
    </div>
  )
}

export default Login;
