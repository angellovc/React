const initialState = [{
    id: 1,
    todo: 'Buy bread',
    done: false
}];

const todoReducer = (state = initialState, action) => {
    /* Reducer is a pure function that receive the current state
    plus an action, this funciton needs to be sincrous and does not
    change the current state, instead of that, it creates a new state */
    if (action?.type === 'add') {
        return [...state, action.payload];
    }
    return state;
}

let todos = todoReducer();
console.log(todos);

const newTodo = {
    id: 2,
    todo: 'Buy milk',
    done: false
}

const action = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer(todos, action);


console.log(todos);
