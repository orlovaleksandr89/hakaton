import React from 'react'
import { useState, useEffect } from 'react'
import Member from '../components/Member'
import { fetchAll } from '../data/Data'
import reactLogo from './Vera_Milyakova/img/logo512.png'

const MemberList = () => {
  const [members, setMembers] = useState([])
  useEffect(() => {
    fetchAll().then((data) => {
      setMembers(data)
    })
  }, [])

  if (members) {
    return (
      <div className='container'>
        {members.length ? (
          <Member members={members} />
        ) : (
          <div className='d-flex justify-content-center align-items-center'>
            <img className='App-logo' src={reactLogo} alt='reactLogo' />
          </div>
        )}
      </div>
    )
  }
  return
}

export default MemberList
