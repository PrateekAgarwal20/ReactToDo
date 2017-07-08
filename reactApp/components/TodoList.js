import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo.js';

const TodoList = ({todos}) => {
    return (
        <ul>
            {todos.map(item => <Todo task={item.task} completed={item.completed} />)}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array
};

export default TodoList;
