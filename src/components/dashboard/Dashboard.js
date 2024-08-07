import React from 'react'
import Card from './card/Card'
import Profit from './profit/Profit'
import Activity from './activity/Activity'
import Orders from './orders/Orders'
import FeedBack from './feedback/FeedBack'
import { FaBasketShopping } from "react-icons/fa6";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { TbArrowsDown } from "react-icons/tb";

import './Dashboard.css'

const Dashboard = () => {
  let cards = [
    {
      icon: <FaBasketShopping />,
      text: "Total orders",
      amount: '75',
      flag: 'green',
      color: 'blue'
    },
    {
      icon: <PiHandbagSimpleFill />,
      text: "Total Delivered",
      amount: '70',
      flag: 'red',
      color: 'green'
    },
    {
      icon: <PiHandbagSimpleFill />,
      text: "Total Revenue",
      amount: '05',
      flag: 'green',
      color: 'coral'
    },
    {
      icon: <TbArrowsDown />,
      text: "Total Revenue",
      amount: '$12k',
      flag: 'red',
      color: 'pink'
    }
  ]
  return (
    <div className='dashboard'>
      <div className='hed'>
        <h1>Dashboard</h1>
      </div>
      <div className='sec1'>
        <div className='cards'>
          {
            cards.map((card, i) => (
              <Card card={card} key={i} />
            ))
          }
        </div>
        <div className='profit' >
          <Profit/>
        </div>
      </div>
      <div className='sec2'>
         <Activity/>
      </div>
      <div className='sec3 d-flex align-items-center justify-content-between'>
        <div>
        <Orders/>
        </div>
        <div>
        <FeedBack/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard