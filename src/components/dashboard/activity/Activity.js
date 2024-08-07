import React from 'react'
import ReactEcharts from "echarts-for-react"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGreaterThan } from "react-icons/fa6";
import { CiCircleChevDown } from "react-icons/ci";
import { BiDish } from "react-icons/bi";
import { IoMdDocument } from "react-icons/io";


const options = {
  grid: { top: 20, right: 40, bottom: 20, left: 40 },
  xAxis: {
    type: "category",
    data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [400, 300, 350, 200, 280],
      type: "bar",
      smooth: true
    }
  ],
  tooltip: {
    trigger: "axis"
  }
}


const Activity = () => {
  return (
    <div className='d-flex justify-content-between  flex-wrap align-items-center mt-2 h-100  ms-2'>
      <ReactEcharts
        option={options}
        className='w-50 h-100 bgcolor'
      ></ReactEcharts>
      <div className='d-flex justify-content-center align-items-center me-1 w-45 me-2 h-100'>
        <Card className='w-100 h-100'>
          <ListGroup variant="flush" className='h-100'>
            <ListGroup.Item className='bgcolor'>
              <div className='d-flex justify-content-between align-items-center'>
                <div>
                  <div className='icon'>
                  <CiCircleChevDown />
                  </div>
                  <span>Goals</span>
                </div>
                <FaGreaterThan />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className='bgcolor'>
              <div className='d-flex justify-content-between align-items-center'>
                <div>
                  <div className='icon'>
                  <BiDish />
                  </div>
                  <span>Popular Dishes</span>
                </div>
                <FaGreaterThan />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className='bgcolor'>
              <div className='d-flex justify-content-between align-items-center'>
                <div>
                  <div className='icon'>
                  <IoMdDocument />
                  </div>
                  <span>Menus</span>
                </div>
                <FaGreaterThan />
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  )
}

export default Activity