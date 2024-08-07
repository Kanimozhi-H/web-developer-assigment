import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { RiBarChartBoxLine } from "react-icons/ri";
import { BsFillBagCheckFill } from "react-icons/bs";
import { GiShoppingBag } from "react-icons/gi";
import { IoPowerSharp, IoWallet } from "react-icons/io5";
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <div className=''>
          <MdHomeFilled />
        </div>
        <div className=''>
          <RiBarChartBoxLine />
        </div>
        <div className=''>
          <BsFillBagCheckFill />
        </div>
        <div className=''>
          <GiShoppingBag />
        </div>
        <div className=''>
          <IoWallet />
        </div>
      </div>
      <div className='bottom'>
        <div className=''>
          <IoPowerSharp />
        </div>
      </div>
    </div>
  )
}

export default Sidebar