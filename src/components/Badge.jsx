import React from 'react'
import { Badge } from 'react-bootstrap'

const BadgeMember = ({ castomStyle, color, text }) => {
  return (
    <Badge className={castomStyle} bg={color}>
      {text}
    </Badge>
  )
}

export default BadgeMember
