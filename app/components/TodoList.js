import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo.js';

const TodoList = ({todos, deleteTodo, toggleTodo}) => {
    return (
        <ul>
            {todos.map((item) => <Todo todo={item} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>)}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array,
    deleteTodo: PropTypes.func,
    toggleTodo: PropTypes.func
};

export default TodoList;
