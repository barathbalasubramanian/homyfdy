import React from 'react'

function Partners() {
  return (
    <div className='py-10 px-16'>
        <div className='flex flex-col gap-10'>
            <div><img src="/assets/design.svg" alt="Design" /></div>
                <div className='py-6 flex items-center gap-8 justify-between text-start'>
                <div>
                    <div className='text-3xl pb-2'>OUR TOP DEVELOPER PARTNERS</div>
                </div>
            </div>
        </div>

        <div className='flex gap-8 items-center justify-between overflow-scroll'>
            <div className='spon-div'>
                <img src="/assets/spon.svg" alt="Sponser" />
            </div>
            <div className='spon-div'>
                <img src="/assets/spon1.svg" alt="Sponser" />
            </div>
            <div className='spon-div'>
                <img src="/assets/spon2.svg" alt="Sponser" />
            </div>
            <div className='spon-div'>
                <img src="/assets/spon3.svg" alt="Sponser" />
            </div>
            <div className='spon-div'>
                <img src="/assets/spon4.svg" alt="Sponser" />
            </div>
            <div className='spon-div'>
                <img src="/assets/spon2.svg" alt="Sponser" />
            </div>
            <div className='spon-div'>
                <img src="/assets/spon.svg" alt="Sponser" />
            </div>
        </div>

    </div>
  )
}

export default Partners
