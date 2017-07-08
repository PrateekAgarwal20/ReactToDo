import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo.js';

const TodoList = ({todos}) => {
    return (
        <ul>
            {todos.map(item => <Todo todo={item}/>)}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array
};

export default TodoList;
