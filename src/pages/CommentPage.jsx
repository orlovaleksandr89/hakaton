import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import CommentForm from '../components/Comment_Section/CommentForm'
import CommentList from '../components/Comment_Section/CommentList'
import { FIREBASE_URL } from '../utils/firebaseUrl'

function CommentPage() {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const sendPostToServer = (data) => {
    try {
      fetch(FIREBASE_URL + 'comments.json', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      })
    } catch (error) {
      console.log(error)
    }
  }
  const getCommentsFromDB = () => {
    setIsLoading(true)

    fetch(FIREBASE_URL + 'comments.json')
      .then((response) => response.json())
      .then((data) => {
        const comments = []
        for (const key in data) {
          const comment = {
            id: key,
            ...data[key]
          }
          comments.unshift(comment)
        }

        setIsLoading(false)
        return comments
      })
      .then((comments) => setComments(comments))
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getCommentsFromDB()
  }, [])

  return (
    <>
      <Row className='d-flex justify-content-center mt-1'>
        <Col md={10}>
          <CommentForm
            sendPostToServer={sendPostToServer}
            getCommentsFromDB={getCommentsFromDB}
          />
        </Col>
      </Row>
      <Row className='d-flex justify-content-center mt-1'>
        <Col md={10}>
          <CommentList isLoading={isLoading} comments={comments} />
        </Col>
      </Row>
    </>
  )
}

export default CommentPage
