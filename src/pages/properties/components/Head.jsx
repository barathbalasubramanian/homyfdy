import React from 'react'

function Head() {
  return (
    <main className="flex px-20 py-20 pb-28 flex-col self-center mt-0 w-full max-md:mt-0 max-md:px-6 max-md:py-6">
        <div>
        <img
            loading="lazy"
            src="/assets/design.svg"
            alt=""
            className='pb-2'
        />
        </div>
        <div className="flex -z-50 relative flex-col w-4/5 max-md:w-full">
          <h1 className="z-0 text-4xl text-white max-md:max-w-full">
            FIND YOUR DREAM PROPERTY
          </h1>
          <p className="z-0 mt-2.5 text-base font-medium leading-6 text-neutral-400 max-md:max-w-full">
            Welcome to Homyfyd, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey           </p>
        </div>
      </main>
  )
}

export default Head
