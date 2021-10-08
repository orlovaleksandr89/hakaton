import React from 'react'
import { Card } from 'react-bootstrap'

function SingleComment({ comments }) {
  return (
    <div className='d-flex flex-column  align-items-center justify-content-center mt-3 '>
      {comments.map((comment) => {
        return (
          <Card key={comment.date} className='mt-3'>
            <p>{comment.nickname}</p>
            <p>{comment.date.toString()}</p>
            <p>{comment.comment}</p>
          </Card>
        )
      })}
    </div>
  )
}
export default SingleComment
