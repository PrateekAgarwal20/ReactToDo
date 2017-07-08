import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo.js';

const TodoList = ({todos, deleteTodo}) => {
    return (
        <ul>
            {todos.map((item) => <Todo todo={item} deleteTodo={deleteTodo}/>)}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array,
    deleteTodo: PropTypes.func
};

export default TodoList;
