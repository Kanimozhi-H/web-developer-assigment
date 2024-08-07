import React from 'react'
import { IoGrid, IoNotifications, IoSearch } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { AiTwotoneSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import './Header.css'

const Header = () => {
    return (
        <div className='header d-flex align-content-center justify-content-between align-items-center flex-wrap'>
            <div className='left d-flex ms-3 h-50 align-items-center'>
            <div className='mainicon'>
                <IoGrid size="2em" />
            </div>
            <div className='search-bar ms-3 border-1 d-flex align-items-center justify-content-center flex-wrap h-100 w-100'>
                <IoSearch />
                <input placeholder='search' className='border-0'/>
            </div>
            </div>
            <div className='icons d-flex align-content-center justify-content-center justify-content-center flex-wrap'>
                <div className='icon me-2'>
                <FaMessage size="1.2em" />
                </div>
                <div className='icon me-2'>
                <AiTwotoneSetting  size="1.2em"/>
                </div>
                <div className='icon me-2'>
                <IoNotifications  size="1.2em"/>
                </div>
                <div className='icon me-2'>
                <CgProfile  size="1.2em"/>
                </div>
            </div>
        </div>
    )
}

export default Header