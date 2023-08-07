import React from 'react'
import Draggable from 'react-draggable'
export default function DraggableIcon({children}) {
  return (
    <Draggable>
        {children}
    </Draggable>
  )
}
