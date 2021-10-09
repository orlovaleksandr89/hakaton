import React from 'react'
import { members } from '../data/Data'
import { getMemberById } from '../utils/functions'
import PageError from '../pages/ErrorPage'
import { ProgressBar } from 'react-bootstrap'
import BadgeMember from './Badge'
import { Link } from 'react-router-dom'
import { PERSONAL_USER_ROUTE } from '../utils/const'

const RenderCard = ({ id }) => {
  const memberById = getMemberById(members, id)
  if (!memberById?.id) {
    return <PageError />
  }
  return (
    <div className="container mx-auto w-100 shadow p-5">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-6">
          <h1>
            {memberById.name}
            {memberById.isLeader ? (
              <BadgeMember color="success" text="Team Leader" />
            ) : (
              <BadgeMember color="warning" text="Developer" />
            )}
          </h1>
          <span>{`Возраст: ` + memberById.age}</span>
          <p>{`О себе: ` + memberById.about}</p>
          <div>
            <h5>{`Задачи на проекте: ` + memberById.tasks}</h5>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center">
          <div>
            <img
              className="img-fluid"
              src={memberById.image}
              alt={memberById.id}
              style={{ maxHeight: 300, borderRadius: 150 }}
            />
          </div>
          <div>
            {memberById.social.map((element) => (
              <a key={element} href={element} className="m-1">
                {element}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div>
          <h4>Технологии:</h4>
          <div className="w-100 mx-auto">
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
          {Number(id) === 3 ? (
            <Link to={PERSONAL_USER_ROUTE} className="btn btn-primary m-2">
              <h3>Перейти в мой компонент</h3>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default RenderCard
