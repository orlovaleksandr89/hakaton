import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import BreadcrumbList from '../components/Breadcrumb'

import NavBar from '../components/Navbar'
import Footer from './Footer'

function Layout(props) {
  const [active, setActive] = useState()
  return (
    <>
      <NavBar active={active} setActive={setActive} />
      <BreadcrumbList setActive={setActive} />

      <Container>{props.children}</Container>
      <Footer />
    </>
  )
}

export default Layout
