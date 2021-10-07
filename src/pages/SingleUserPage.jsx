import React from 'react'
import { useParams } from 'react-router-dom'

function SingleUserPage() {
  const { id } = useParams()

  return <div>user id = {id}</div>
}

export default SingleUserPage
