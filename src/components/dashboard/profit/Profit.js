import React from 'react'
import './Profit.css'

const Profit = () => {
  return (
    <React.Fragment>
      <div className='left-p'>
        <div className='n-text'>Net Profit</div>
        <div className='n-amo'>
          <span>$</span>
          <span> 6759.25</span>
        </div>
        <div style={{ color: 'green' }}>
          3%
        </div>
      </div>
      <div>
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full">
              <div className="fill"></div>
            </div>
            <div className="mask half">
              <div className="fill"></div>
            </div>
            <div className="inside-circle">
              70%
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Profit