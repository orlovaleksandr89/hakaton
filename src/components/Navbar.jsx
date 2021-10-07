import React, { useState } from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import {
  COMMENT_ROUTE,
  FAVORITE_ROUTE,
  MAIN_ROUTE,
  USER_ROUTE
} from '../utils/const'

function NavBar() {
  const [active, setActive] = useState()

  const links = [
    { route: USER_ROUTE, name: 'Users' },
    { route: FAVORITE_ROUTE, name: 'Favorites' },
    { route: COMMENT_ROUTE, name: 'Leave comment or feedback' }
  ]
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <NavLink
          to={MAIN_ROUTE}
          role='button'
          className='me-3 text-light'
          style={{ textDecoration: 'none', fontSize: '1.5rem' }}
          onClick={() => setActive(null)}
        >
          Dream Team Hakaton
        </NavLink>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto '>
            {links.map((link) => (
              <Link
                style={{ textDecoration: 'none', fontSize: '1rem' }}
                className='me-3 text-light'
                to={link.route}
                key={link.route}
              >
                <Button
                  variant={'outline-light'}
                  className={
                    active === link.name ? 'border-0 active' : 'border-0'
                  }
                  onClick={() => setActive(link.name)}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
