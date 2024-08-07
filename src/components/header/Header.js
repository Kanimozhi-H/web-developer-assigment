import React from 'react'
import { IoGrid, IoNotifications, IoSearch } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { AiTwotoneSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='left'>
            <div className='mainicon'>
                <IoGrid size="2em" />
            </div>
            <div className='search-bar'>
                <IoSearch />
                <input placeholder='search'/>
            </div>
            </div>
            <div className='icons'>
                <div className='icon'>
                <FaMessage size="1.2em" />
                </div>
                <div className='icon'>
                <AiTwotoneSetting  size="1.2em"/>
                </div>
                <div className='icon'>
                <IoNotifications  size="1.2em"/>
                </div>
                <div className='icon'>
                <CgProfile  size="1.2em"/>
                </div>
            </div>
        </div>
    )
}

export default Header