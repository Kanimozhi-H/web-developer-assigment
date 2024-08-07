import React from 'react'
import './Card.css'

const Card = ({card}) => {
  return (
    <React.Fragment>
      {
        <div className='card'>
          <div className='c-icon' style={{color:card.color,backgroundColor:'light'+card.color}}>
            {card.icon}
          </div>
          <div className='c-text'>
           {card.text}
          </div>
          <div className='c-num'>
            <span className='amount'>
              {card.amount}
            </span>
            <span style={{color:card.flag}}>3%</span>
          </div>
        </div>
      }
       </React.Fragment>
  )
}

export default Card