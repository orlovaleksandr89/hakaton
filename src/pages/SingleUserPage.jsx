import React from 'react'
import { useParams } from 'react-router-dom'

import RenderCard from '../components/RenderCard'

function SingleUserPage() {
  const { id } = useParams()

  return (
    <div>
      <RenderCard id={id} />
    </div>
  )
}

export default SingleUserPage
