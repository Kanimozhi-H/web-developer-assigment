import React from 'react'
import Table from 'react-bootstrap/Table';
import './Orders.css'

const Orders = () => {
  return (
    <div>
      <Table responsive >
        <thead>
          <tr>
            {Array.from({ length: 4 }).map((_, index) => (
              <th className='bgcolor' key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>{
          Array.from({ length: 4 }).map((_, index) => (
            <tr key={index}>
              {Array.from({ length: 4 }).map((_, index) => (
                <td className='bgcolor' key={index}>Table cell {index}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Orders