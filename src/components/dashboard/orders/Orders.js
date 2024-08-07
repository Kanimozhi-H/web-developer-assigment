import React from 'react'
import Table from 'react-bootstrap/Table';
import { CgProfile } from "react-icons/cg";
import './Orders.css'

const Orders = () => {
  let tableHeadings = ['Customer','Order No','Amount','Status']
  let data = [
    {
      Customer : 'vijay' ,
      Order_No : '12376',
      Amount:'$124.00',
      Status:'Delivered'
    },
    {
      Customer : 'shemu' ,
      Order_No : '14578',
      Amount:'$140.00',
      Status:'Cancelled'
    },
    {
      Customer : 'ram' ,
      Order_No : '74565',
      Amount:'$100.00',
      Status:'Cancelled'
    },
    {
      Customer : 'mei' ,
      Order_No : '45765',
      Amount:'$150.00',
      Status:'Delivered'
    }
  ]
  return (
    <div className='w-100'>
      <Table responsive className='w-100' >
        <thead>
          <tr>
            {tableHeadings.map((head, index) => (
              <th className='bgcolor' key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>{
          data.map((item, index) => (
            <tr key={index}>
                <td className='bgcolor'> 
                <div className='icon d-flex'>
                <CgProfile  size="1.2em"/>
                </div>
                 {item.Customer}</td>
                 <td className='bgcolor'> {item.Order_No} </td>
                 <td className='bgcolor'> {item.Amount} </td>
                 <td className='bgcolor'> {item.Status} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Orders