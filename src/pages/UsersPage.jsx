import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import AllUsersPage from './AllUsersPage'
import SingleUserPage from './SingleUserPage'

function UsersPage() {
  const { id } = useParams()

  return <Container>{id ? <SingleUserPage /> : <AllUsersPage />}</Container>
}

export default UsersPage
