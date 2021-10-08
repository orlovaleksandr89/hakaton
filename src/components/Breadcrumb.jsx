import React from 'react'
import { Container, Breadcrumb } from 'react-bootstrap'
import { withRouter } from 'react-router'
import { MAIN_ROUTE } from '../utils/const'

function BreadcrumbList(props) {
  // const lastIndex = (index) => index === crumbs.length - 1
  const { history, location, setActive } = props
  const { pathname } = location
  const pathnames = pathname.split('/').filter((path) => path)

  return (
    <Container className='my-2 fw-bold'>
      <Breadcrumb>
        <Breadcrumb.Item
          onClick={() => {
            history.push(MAIN_ROUTE)
            setActive(null)
          }}
        >
          HOME
        </Breadcrumb.Item>
        {pathnames.map((item, i) => {
          const lastItem = i === pathnames.length - 1 ? true : false
          const routeTo = `/${pathnames.slice(0, i + 1).join('/')}`

          return (
            <Breadcrumb.Item
              key={item}
              active={lastItem}
              onClick={() => history.push(routeTo)}
            >
              {item.toUpperCase()}
            </Breadcrumb.Item>
          )
        })}
      </Breadcrumb>
    </Container>
  )
}

export default withRouter(BreadcrumbList)
