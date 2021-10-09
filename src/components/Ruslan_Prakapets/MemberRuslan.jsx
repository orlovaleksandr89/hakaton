import React from 'react'
import { members } from '../../data/Data'
import { getMemberById } from '../../utils/functions'
import PageError from '../../pages/ErrorPage'
import { ProgressBar } from 'react-bootstrap'
import BadgeMember from '../Badge'

const MemberRuslan = ({ id }) => {
  const memberById = getMemberById(members, id)
  if (!memberById?.id) {
    return <PageError />
  }
  return (
    <div className='container mx-auto w-100 shadow p-5'>
      <div className='row justify-content-between align-items-center'>
        <div className='col-md-6'>
          <h1>
            {memberById.name}
            {memberById.isLeader ? (
              <BadgeMember color='success' text='Team Leader' />
            ) : (
              <BadgeMember color='warning' text='Developer' />
            )}
          </h1>
          <span>{`Возраст: ` + memberById.age}</span>
          <p>{`О себе: ` + memberById.about}</p>
        </div>
        <div className='col-md-6 d-flex flex-column align-items-center'>
          <div>
            <img
              className='img-fluid'
              src={memberById.image}
              alt={memberById.id}
              style={{ maxHeight: 300, borderRadius: 150 }}
            />
          </div>
          <div>
            {memberById.social.map((element) => (
              <a key={element} href='/' className='m-1'>
                {element}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div>
        <span>{`Задачи на проекте: ` + memberById.tasks}</span>
      </div>
      <div className='border-top mt-2'>
        <h4>Технологии:</h4>
        <div className='w-100 mx-auto'>
          {Object.keys(memberById.skills).map((skill) => (
            <div key={skill}>
              <h6>{skill}</h6>
              <ProgressBar
                now={memberById.skills[skill]}
                label={`${memberById.skills[skill]}%`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MemberRuslan
