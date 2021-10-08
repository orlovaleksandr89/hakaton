import React from 'react'
import Member from '../components/Member'
import { members } from '../data/Data'

const MemberList = () => {
  return (
    <div className="container">
      {members.length ? (
        <Member members={members} />
      ) : (
        <h1 className="text-center">Список пуст!</h1>
      )}
    </div>
  )
}

export default MemberList
