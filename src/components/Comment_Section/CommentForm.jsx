import React, { useRef, useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

function CommentForm({ setComments }) {
  const nicknameInputRef = useRef()
  const commentInputRef = useRef()
  const [nickname, setNickName] = useState('')
  const [comment, setComment] = useState('')

  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    const enteredNickname = nicknameInputRef.current.value
    const enteredComment = commentInputRef.current.value
    if (!enteredNickname || !enteredComment) {
      return setValidated(true)
    }
    event.preventDefault()
    const commentObj = {
      nickname: enteredNickname,
      comment: enteredComment,
      date: new Date()
    }
    setNickName('')
    setComment('')
    setComments((prev) => [commentObj, ...prev])
  }
  console.log(validated)
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className='mb-3'>
        <Form.Group as={Col} md='12' controlId='validationCustom01'>
          <Form.Label>Your nickname</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='First name'
            ref={nicknameInputRef}
            value={nickname}
            onChange={(e) => setNickName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md='12' controlId='validationCustom02'>
          <Form.Label>Your comment</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Leave your comment or feedback'
            ref={commentInputRef}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <div className='d-flex align-self-end'>
        <Button type='submit' className='mt-4' variant={'outline-dark'}>
          Post your comment
        </Button>
      </div>
    </Form>
  )
}

export default CommentForm