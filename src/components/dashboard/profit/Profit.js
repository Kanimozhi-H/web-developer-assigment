import React from 'react'
import './Profit.css'

const Profit = () => {
  return (
    <React.Fragment>
      <div className='left-p h-100 w-50 d-flex flex-column flex-wrap justify-content-around ms-3'>
        <div className='fs-4 f-color'>Net Profit</div>
        <div className='n-amo fs-2 f-color'>
          <span>$</span>
          <span> 6759.25</span>
        </div>
        <div style={{ color: 'green' }}>
          3%
        </div>
      </div>
      <div className='me-2'>
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