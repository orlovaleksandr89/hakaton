import React from 'react'
import { Card } from 'react-bootstrap'

function SingleComment({ nickname, date, comment }) {
  return (
    <Card className='w-100 mt-3 '>
      <Card.Body>
        <Card.Title>{nickname}</Card.Title>
        <Card.Text className='border-bottom mb-2'>{date}</Card.Text>
        <Card.Text className='mt-2'>{comment}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleComment
