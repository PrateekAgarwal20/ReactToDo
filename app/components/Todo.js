import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({todo, deleteTodo}) => {
    return (
        <li>
            <input type="submit" value="X" onClick={() => deleteTodo(todo.id)} />
            {' '}
            {todo.completed ? <div className="complete">{todo.task}</div> : <div className="incomplete">{todo.task}</div>}
        </li>
    );
};

Todo.propTypes = {
    todo: PropTypes.object,
    deleteTodo: PropTypes.func
};

export default Todo;
