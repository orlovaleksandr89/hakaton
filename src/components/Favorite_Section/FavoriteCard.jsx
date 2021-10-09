import React from 'react'
import { Col, Container, Image, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BadgeMember from '../Badge'

function FavoriteCard({ member, removeFavorite }) {
  return (
    <Container className='p-2 '>
      <Row>
        <Col
          md={3}
          className='my-2 d-flex justify-content-center align-items-center'
        >
          <Link to={`/hakaton/users/${member.id}`} role={'button'}>
            <Image
              src={member.image}
              fluid
              style={{ maxHeight: 150 }}
              className='rounded'
            />
          </Link>
        </Col>
        <Col
          md={4}
          className='my-2 d-flex justify-content-between align-items-center'
        >
          <h3>{member.name}</h3>
          <p>{member.about}</p>
        </Col>
        <Col
          md={2}
          className='my-2 d-flex justify-content-center align-items-center'
        >
          <BadgeMember
            color={member.isLeader ? 'success' : 'warning'}
            text={member.isLeader ? 'Team Leader' : 'Developer'}
          />
        </Col>
        <Col
          md={3}
          className='my-2 d-flex justify-content-center align-items-center'
        >
          <Button
            onClick={() => removeFavorite(member.id)}
            variant={'outline-danger'}
          >
            Удалить из избранного
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default FavoriteCard
