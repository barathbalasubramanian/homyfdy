import React from 'react'
import { useNavigate } from 'react-router-dom'

function CompareDiv({setCmpPage,CmpCnt,SetCmpBtn}) {
    const navigate = useNavigate();
    return (
    <div className='bg-white rounded-xl px-6 py-4 flex flex-col gap-3 items-start justify-between w-[25em] max-md:w-[18em]'>
        <div className='flex w-full text-black items-center justify-between'>
            <div className='text-2xl'>Compare</div>
            <div className='text-lg text-rose-600 cursor-pointer' onClick={()=>SetCmpBtn(false)}>Close</div>
        </div>
        
        {
                CmpCnt <= 1  ?
                <div className='text-black text-[13px] w-[80%] m-auto flex flex-col gap-2 items-center justify-center text-center'>
                    <img src="/assets/compareimg.svg" alt="Compare" />
                    <div>You haven't selected any properties.Please select minimum 2 properties to compare</div>
                </div> 
                : 
                <div className='flex w-full items-center text-center justify-center text-black'>
                    You have {CmpCnt} to Compare
                </div>
        }

        <div className='flex w-full items-center px-6 justify-between'>
            <div onClick={()=>setCmpPage(true)} className='cursor-pointer mt-4 w-2/6 text-center text-black justify-center flex items-center gap-3 px-2 py-1' style={{ backgroundColor: '#ECE7E4', borderRadius: '5px' }}>
                <div>Add</div>
            </div>
            <div 
                onClick={() => {
                    if (CmpCnt >= 2) {
                    navigate("/compare");
                    SetCmpBtn(false);
                    }
                }} 
                className={`mt-4 w-3/6 text-center text-white justify-center flex items-center gap-3 px-2 py-1 rounded ${CmpCnt >= 2 ? 'bg-green-500 cursor-pointer opacity-100' : 'bg-green-500 cursor-not-allowed opacity-50'}`}
                >
            <div>Compare</div>
            </div>
        </div>
    </div>
  )
}

export default CompareDiv
