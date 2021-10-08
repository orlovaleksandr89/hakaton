import React from 'react'
import { Badge } from 'react-bootstrap'

const BadgeMember = ({ color, text }) => {
  return <Badge className='ms-2' bg={color}>{text}</Badge>
}

export default BadgeMember
