import React from 'react'
import './Column.css'
import Task from '../Task/Task'

const Column = ({state}) => {
  return (
    <div className='column'>
      <div>{state}</div>
      <Task title="Todo"/>
    </div>
  )
}

export default Column
