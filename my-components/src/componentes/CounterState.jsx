import React, { useState } from 'react';
const CounterState = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Contador com useState</h1>
            <p>Count: {count}</p>
            <div>
                <button type="button"
                    onClick={() => { setCount(count => count + 1) }}>
                    +
                </button>
                <button type="button"
                    onClick={() => { setCount(count => count - 1) }}>
                    -
                </button>
            </div>
        </div>
    );
};
export default CounterState;

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'DO_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, complete: true };
                } else {
                    return todo;
                }
            });
        case 'UNDO_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, complete: false };
                } else {
                    return todo;
                }
            });
        case 'ADD_TODO':
            return state.concat({
                task: action.task,
                id: action.id,
                complete: false,
            });
        default:
            throw new Error();
    }
};

const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload,
            };
        case 'FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            throw new Error();
    }
};