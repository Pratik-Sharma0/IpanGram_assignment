import React from 'react'
import data from '../MOCK_DATA.json'
const Mainbar = ({select}) => {
   
  return (
    <>
    <div className=' w-[72%] m-2   flex flex-wrap items-center'>
        {
         data.map((ele)=>(
          <>
          <input key={ele.id} className='w-6 h-6 m-1 accent-sky-500' type='checkbox'/>
          {
            select=='[UTC-5]Eastern Standard Time'?<p className='text-base'>{Number(ele.Time.slice(0,1))+2}{ele.Time.slice(1)}</p>:<p className='text-base'>{ele.Time}</p>
          }
          
          
          </>  
             
         )

         )
        }

    </div>
    </>
  )
}

export default Mainbar