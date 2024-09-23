import React from 'react';

function CommonContact({ name, email }) {
  return (
    <div>
      <div
        className='w-full flex justify-between py-10 px-32 max-md:px-10 max-md:justify-center max-md:py-20'
        style={{
          // background: "linear-gradient(to right, #1FC827 0%, #1FC827 60%, #000000 60%)",
          height: "15em"
        }}
      >
        <div className='flex gap-3 items-center'>
          {/* <img src="/assets/profileimg.svg" style={{width:"4em",height:"4em",borderRadius:"50%"}} alt="Profile" /> */}
          <div className='flex flex-col gap-1 items-start'>
            <div className='averoxfont text-xl uppercase font-bold tracking-widest'>
              {name}
            </div>
            <div className='text-sm'>
              {email}
            </div>
          </div>
        </div>
        <div
          className='text-8xl self-end max-md:hidden'
          style={{ fontWeight: '200', color: 'green' }}
        >
          HOMYFYD
        </div>
      </div>
    </div>
  );
}

export default CommonContact;
