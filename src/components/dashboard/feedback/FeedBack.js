import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

const FeedBack = () => {
  let feedBack = [
    {
      name:'vijay',
      rating:5,
      comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
    },
    {
      name:'shemu',
      rating:4,
      comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
    },
    {
      name:'sri',
      rating:5,
      comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
    },
    {
      name:'devi',
      rating:3,
      comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
    },
    {
      name:'maha',
      rating:1,
      comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
    }
  ]
  return (
    <div className='w-100  bgcolor'>
        <Card className='w-100 overflow-auto hide-scrollbar ' style={{height: '13rem'}}>
      <Card.Header>Customer FeedBack</Card.Header>
      <ListGroup variant="flush">
        {
       feedBack.map((item,index)=>(
        <ListGroup.Item key={index}>
          <div>
            <div>
            <CgProfile/>
            </div>
            <span>{item.name}</span>
          </div>
          <div>
            {Array.from({length:5}).map((_,index)=>(
              <MdOutlineStarBorderPurple500 key={index}/>
            ))}
          </div>
          <div>
            <span>{item.comment}</span>
          </div>
        </ListGroup.Item>
       ))
        }
      </ListGroup>
    </Card>
    </div>
  )
}

export default FeedBack