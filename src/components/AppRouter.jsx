import React from 'react'
import { routes } from '../routes'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MAIN_ROUTE } from '../utils/const'

function AppRouter() {
  return (
    <Switch>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={MAIN_ROUTE} />
    </Switch>
  )
}

export default AppRouter
