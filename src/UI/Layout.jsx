import React from 'react'
import { Container } from 'react-bootstrap'
import BreadcrumbList from '../components/Breadcrumb'

import NavBar from '../components/Navbar'
import Footer from './Footer'

function Layout(props) {
  return (
    <>
      <NavBar />

      <BreadcrumbList />
      <Container>{props.children}</Container>
      <Footer />
    </>
  )
}

export default Layout
