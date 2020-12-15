import React from 'react';
import useForm from '../../hooks/useForm';

const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, resetForm] = useForm({
        description: '',

    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (description.trim().length === 0) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }
        handleAddTodo(newTodo);
        resetForm();
    }

    return (
        <>
            <h4>Add TODO</h4>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="learn..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                    >
                </input>
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Add
                </button>
            </form>

        </>
    )
}

export default TodoAdd
