import React from 'react'
import { useNavigate } from 'react-router-dom'

function CompareDiv({setCmpPage,CmpCnt}) {
    const navigate = useNavigate();
    return (
    <div style={{width:"25em"}} className='bg-white rounded-xl px-6 py-4 flex flex-col gap-3 items-start justify-between'>
        <div className='flex w-full text-black items-center justify-between'>
            <div className='text-2xl'>Compare</div>
            <div className='text-lg text-neutral-500 cursor-pointer'>Clear</div>
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
            <div onClick={()=>navigate("/compare")} className='cursor-pointer mt-4 w-3/6 text-center text-white justify-center flex items-center gap-3 px-2 py-1' style={{ backgroundColor: 'var(--green)', borderRadius: '5px' }}>
                <div>Compare</div>
            </div>
        </div>
    </div>
  )
}

export default CompareDiv
