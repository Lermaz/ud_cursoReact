import React, { Fragment } from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {

  return (
    <Fragment>
      <ul className="list-group list-group-flush">
        {
          todos.map( (todo, index) => (
            <TodoListItem
              key={ todo.id }
              todo={ todo }
              index={ index }
              handleDelete={ handleDelete }
              handleToggle={ handleToggle } />
          ))
        }
      </ul>
    </Fragment>
  )
}