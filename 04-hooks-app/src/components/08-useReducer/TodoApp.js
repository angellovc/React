import React, { useEffect, useReducer } from 'react';
import {todoReducer} from './todoReducer';
import './styles.css';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';


const init = () => {
    return JSON.parse(localStorage.getItem('todos') || []);
}

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const handleAddTodo = (newTodo) => {
        const action = {
            type: 'add',
            payload: newTodo
        }
        dispatch(action);
    }


    const handleToggle = (todoId) => {
        const action = {
            type: 'toggle',
            payload: todoId
        }
        dispatch(action);
    }

    const handleRemoveTodo = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }

    return (
        <div>
            <h1>Todo App <small>({todos.length})</small></h1>
            <hr/>

            <div className="row">
                <TodoList
                    todos={todos}
                    handleRemoveTodo={handleRemoveTodo}
                    handleToggle={handleToggle}
                />
                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    )
}

export default TodoApp