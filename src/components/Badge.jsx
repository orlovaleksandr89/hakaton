import React from 'react'
import { Badge } from 'react-bootstrap'

const BadgeMember = ({ color, text }) => {
  return <Badge bg={color}>{text}</Badge>
}

export default BadgeMember
