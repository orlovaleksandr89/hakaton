import React from 'react'
import { Container, Spinner } from 'react-bootstrap'
import SingleComment from './SingleComment'

function CommentList({ comments, isLoading }) {
  if (isLoading) {
    return (
      <Container className='d-flex justify-content-center align-items-center'>
        <Spinner animation='border' />
      </Container>
    )
  }
  return (
    <div className='d-flex flex-column  align-items-center justify-content-center my-3'>
      <div className='w-100'>
        <h4>Comments</h4>
      </div>
      {comments.map((comment) => {
        return <SingleComment key={comment.date} {...comment} />
      })}
    </div>
  )
}
export default CommentList
