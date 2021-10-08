import React from 'react'
import MemberList from '../components/MemberList'

function MainPage() {
  return (
    <div className="container">
      <div className="d-flex flex-column">
        <div>
          <h5 className="text-center border-bottom pb-4 shadow-sm">
            О команде: cупер перспективные ребята
          </h5>
        </div>
      </div>
      <MemberList />
    </div>
  )
}

export default MainPage
