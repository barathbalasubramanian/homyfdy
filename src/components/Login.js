import React, { useState } from 'react'
import OtpInput from 'react-otp-input';

function Login({ closeLogin }) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleCompareClick = () => {
        console.log(formData);
        setoptDiv(true)
      };
      const [otp, setOtp] = useState('');
      const [otpDiv, setoptDiv] = useState(false) 
      const [login, setlogin ] = useState(false);     

  return (
    <div style={{position: 'fixed',top: 0,left: 0,width: '100vw',height: '100vh',backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)', zIndex: 1000, display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
        <div className='login-con'>
        <div className='max-md:hidden'>
            <img src="/assets/login.svg" alt="Login" style={{ width: '30em', height: '30em', objectFit: 'contain' }}/>
        </div>
        <div className='p-8 flex flex-col gap-4'>

            {/* SignUp */}
            {/* OTP */}
            { otpDiv ? 
                <div className='flex flex-col gap-3'>
                    <div className='text-3xl' style={{color:"green"}}>HOMYFYD</div>
                    <div className='text-xl w-1/3'>Verify your Mobile</div>
                    <div style={{color:"grey"}}>We have sent A 5 Digit OTP on +91 0000000000</div>
                    <div className='otp-box mt-3'>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            renderSeparator={<span>  </span>}
                            renderInput={(props) => <input {...props} />}
                        />
                    </div>
                    <div className='text-sm mt-3' style={{color:"grey"}}>00 : 20</div>
                    <div className='text-sm cursor-pointer' style={{color:"grey"}}>Didn't Receive Otp</div>
                    <div onClick={closeLogin} className='cursor-pointer mt-4 w-4/5 text-center justify-center flex items-center gap-3 px-2 py-1' style={{ backgroundColor: 'var(--green)', borderRadius: '5px' }}>
                        <div>Login</div>
                    </div>
                </div> : 
                <>
                <div className='text-3xl' style={{color:"green"}}>HOMYFYD</div>
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
                    <div className='cursor-pointer mt-4 w-4/5 text-center justify-center flex items-center gap-3 px-2 py-1' style={{ backgroundColor: 'var(--green)', borderRadius: '5px' }} onClick={handleCompareClick}>
                        <div>Continue</div>
                    </div>
                </>
            }

            {
                login ? 
                <div className='flex flex-col gap-3'>
                    <div className='text-3xl' style={{color:"green"}}>HOMYFYD</div>
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

            <div onClick={closeLogin} className='cursor-pointer absolute top-0 right-0 max-md:right-5' style={{width:"14px",height:"14px",borderRadius:"50%",backgroundColor:"crimson"}}></div>
        </div>
    </div>
    </div>
  )
}

export default Login
