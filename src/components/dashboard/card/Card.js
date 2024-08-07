import React from 'react'
import './Card.css'

const Card = ({card}) => {
  return (
    <React.Fragment>
      {
        <div className='card h-100 w-50 d-flex justify-content-around'>
          <div className='c-icon w-25 h-25' style={{color:card.color,backgroundColor:'light'+card.color}}>
            {card.icon}
          </div>
          <div className='c-text fs-4'>
           {card.text}
          </div>
          <div className='c-num'>
            <span className='amount fs-5'>
              {card.amount}
            </span>
            <span style={{color:card.flag}} className='fs-5'>3%</span>
          </div>
        </div>
      }
       </React.Fragment>
  )
}

export default Card