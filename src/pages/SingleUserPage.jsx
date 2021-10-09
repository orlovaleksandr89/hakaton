import React from 'react'
import { useParams } from 'react-router-dom'
import MemberRuslan from '../components/Ruslan_Prakapets/MemberRuslan'

function SingleUserPage() {
  const { id } = useParams()

  return (
    <div>{Number(id) === 3 ? 'Компонент Веры' : <MemberRuslan id={id} />}</div>
  )
}

export default SingleUserPage
