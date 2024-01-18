import React from 'react'
import { useState } from 'react';
import Sidebar from './Sidebar';
import data from '../MOCK_DATA.json'

const Header = () => {
    const currentDate = new Date().toDateString().slice(3);
    const d=new Date().getDate();
    const num=Math.ceil(d/5);
    
    const[select,setSelect]=useState();
    const [currentPage,setCurrentPage]=useState(num);
    const [postPerPage,setPostPerPage]=useState(5);
    const lastPostIndex=currentPage * postPerPage;
    const firstPostIndex=lastPostIndex-postPerPage;
    
    const handleNext=()=>{
        if(data.length/currentPage<currentPage)return currentPage
        else{
            setCurrentPage(currentPage+1)
        }
        
    }
    const handlePrev=()=>{
       if(currentPage===1)return currentPage
       else{
        setCurrentPage(currentPage-1)
       }
     
    }
  return (
    <>
    <div className='h-[10vh] flex w-[100%] justify-between items-center  px-2 '>
        <button onClick={handlePrev} className='text-sky-600'>← Previous Week</button>
        
            <p className='mr-[40%]'>{currentDate}</p>
        
        <button onClick={handleNext} className='text-sky-600'>Next Week →</button>
    </div>
    <div className='px-2 my-2 h-[10vh] w-[100%] '>
        <h3 className='font-bold'>Timezone:</h3>
        <label htmlFor='time-zone'></label>
        <select value={select} onChange={e=>setSelect(e.target.value)} className='w-[100%] border h-10 my-2 p-2' name='time-zone' id='time-zone'>
            <option>[UTC-0]</option>
            <option>[UTC-5]Eastern Standard Time</option>
        </select>

    </div>
    <Sidebar firstPostIndex={firstPostIndex} lastPostIndex={lastPostIndex} select={select} />
    </>
  )
}

export default Header