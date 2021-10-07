import React from 'react'
import NavBar from '../components/Navbar'

function Layout(props) {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  )
}

export default Layout
