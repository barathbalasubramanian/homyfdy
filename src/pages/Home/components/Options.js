import React from 'react';

function Options() {
  return (
    <div className='py-16 px-16 gap-8 flex w-full overflow-scroll max-md:px-3 max-md:py-10'>
      {
        Array(5).fill().map((_, ind) => {
          return (
            <div className='options-con' key={ind}>
              <div className='font-semibold'>Flats by bedrooms in Bangalore</div>
              <div className='flex flex-col'>
                <div>2 BHK apartments in Bangalore</div>
                <div>2 BHK apartments in Bangalore</div>
                <div>2 BHK apartments in Bangalore</div>
                <div>2 BHK apartments in Bangalore</div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Options;
