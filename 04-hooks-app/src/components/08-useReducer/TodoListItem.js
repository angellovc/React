import React from 'react';

const TodoListItem = ({todo, index, handleRemoveTodo, handleToggle}) => {
    return (
    <li
        className="list-group-item"
    >
        <p 
            className={todo.done === true? 'complete text-success': ''}
            onClick={() => handleToggle(todo.id)}
        >
            {index + 1}. {todo.description}
        </p>
        <button
            className="btn btn-danger"
            onClick={() => handleRemoveTodo(todo.id)}
        >
            Delete
        </button>
    </li>
    )
}

export default TodoListItem
