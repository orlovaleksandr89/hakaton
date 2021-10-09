import React from 'react'

import SingleMemberCard from './SingleMemberCard'

const Member = ({ members }) => {
  return (
    <div className='container'>
      <div className='d-flex flex-wrap justify-content-center'>
        {members.map((member) => (
          <SingleMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}

export default Member
