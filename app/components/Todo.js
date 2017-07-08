import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({todo}) => {
    return (
        <li>
            <input type="submit" value="X" />
            {' '}
            {todo.completed ? <div className="complete">{todo.task}</div> : <div className="incomplete">{todo.task}</div>}
        </li>
    );
};

Todo.propTypes = {
    todo: PropTypes.object
};

export default Todo;
