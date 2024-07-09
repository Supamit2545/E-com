import React, { useState } from 'react'
import './topnav.css'
// Import Icon
import { FaShoppingCart } from "react-icons/fa";

const Topnav = () => {
    const [tabs , setTabs] = useState(0)

    const handleActive = (index) =>{
        setTabs(index)
    }

  return (
    <nav className='topnav-container'>  
        <div className='topnav-left'>
            <h1 className='name-brand my-auto font-bold text-2xl'>Phappusa Shop</h1>
            <img src="" alt="" />
        </div>  
        <div className='topnav-center'>
            <ul className='flex space-x-5'>
                <div className={`tabs ${tabs === 0 ? 'active' : ''}`} onClick={() => {handleActive(0)}}>หน้าหลัก <div className='underline-c'></div></div>
                <div className={`tabs ${tabs === 1 ? 'active' : ''}`} onClick={() => {handleActive(1)}}>เสื้อผ้า <div className='underline-c'></div></div>
                <div className={`tabs ${tabs === 2 ? 'active' : ''}`} onClick={() => {handleActive(2)}}>เครื่องประดับ <div className='underline-c'></div></div>
                <div className={`tabs ${tabs === 3 ? 'active' : ''}`} onClick={() => {handleActive(3)}}>ของเล่น <div className='underline-c'></div></div>
            </ul>
        </div>
        <div className="topnav-right space-x-5">
            <button className='border-2 rounded-2xl px-5 py-1 '>SignIn</button>
            <FaShoppingCart className='text-2xl my-auto'/>
        </div>
    </nav>
  )
}

export default Topnav