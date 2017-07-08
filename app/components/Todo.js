import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({todo, deleteTodo, toggleTodo}) => {
    return (
        <li>
            <div onClick={() => toggleTodo(todo.id)}>
                <input type="submit" value="X" onClick={() => deleteTodo(todo.id)} />
                {' '}
                {todo.completed ? <div className="complete">{todo.task}</div> : <div className="incomplete">{todo.task}</div>}
            </div>
        </li>
    );
};

Todo.propTypes = {
    todo: PropTypes.object,
    deleteTodo: PropTypes.func,
    toggleTodo: PropTypes.func
};

export default Todo;
