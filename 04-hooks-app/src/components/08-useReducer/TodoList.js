import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({handleRemoveTodo, handleToggle, todos}) => {
    return (
        <div className="col-7">
            <ul className="list-group list-group-flush">
                {
                    todos.map((todo, index) => (
                        <TodoListItem
                            key={todo.id}
                            todo={todo}
                            index={index}
                            handleRemoveTodo={handleRemoveTodo}
                            handleToggle={handleToggle}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList
