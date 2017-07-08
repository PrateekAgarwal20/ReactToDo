
import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({task, completed}) => {
    return (
        <li>
            <input type="submit" value="X" />
            {' '}
            {completed ? <div className="complete">{task}</div> : <div className="incomplete">{task}</div>}
        </li>
    );
};

Todo.propTypes = {
    completed: PropTypes.boolean,
    task: PropTypes.string

};

export default Todo;
