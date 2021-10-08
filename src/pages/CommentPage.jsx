import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import CommentForm from '../components/Comment_Section/CommentForm'
import SingleComment from '../components/Comment_Section/SingleComment'

function CommentPage() {
  const [comments, setComments] = useState([])
  return (
    <>
      <Row className='d-flex justify-content-center mt-1'>
        <Col md={10}>
          <CommentForm setComments={setComments} />
        </Col>
      </Row>
      <Row className='d-flex justify-content-center mt-1'>
        <Col md={12}>
          <SingleComment comments={comments} />
        </Col>
      </Row>
    </>
  )
}

export default CommentPage
