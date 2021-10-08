import React from 'react'
import { Link } from 'react-router-dom'
import { MAIN_ROUTE } from '../utils/const'

function ErrorPage() {
  return (
    <div className="container hg-100 p-3">
      <div className="d-flex align-items-center justify-content-center h-100">
        <h1>Ошибка 404</h1>
      </div>
      <div className="d-flex justify-content-center">
        <Link to={MAIN_ROUTE} className="btn btn-danger">
          <span>Назад</span>
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
