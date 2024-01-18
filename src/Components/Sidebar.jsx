import React, { useState } from 'react'
import data from '../MOCK_DATA.json'
import Mainbar from './Mainbar'


const Sidebar = ({lastPostIndex,firstPostIndex,select}) => {
    
    
    
   
    const rows=data.slice(firstPostIndex,lastPostIndex);
   

  return (
    <>
    <div className='h-[70vh] w-[100%]'>
     
            {
                rows.map((elem)=>(
                    <div key={elem.id} className='flex h-[22%]  '>
                   <div className=' w-[15%] border'key={elem.id}>
                        <h3 className='text-center mt-2 text-red-600'>{elem.Day}</h3>
                        <p className='text-center'>{elem.Date.slice(5)}</p>
                        </div>
                        <div className='w-100% border'>
                            <Mainbar select={select}/>
                        </div>
                   </div>   
                ))
            }
     
    </div>
    </>
  )
}

export default Sidebar