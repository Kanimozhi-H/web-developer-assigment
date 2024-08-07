import React from 'react'
import ReactEcharts from "echarts-for-react"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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
    <div className='d-flex justify-content-between align-content-center flex-wrap'>
      <ReactEcharts
      option={options}
      style={{width: "29rem", height: "15rem" }}
    ></ReactEcharts>
    <div className='d-flex justify-content-center align-items-center me-1'>
    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
    </div>
  )
}

export default Activity