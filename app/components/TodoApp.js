import React from 'react';
import Routes from '../routes/routes.js';
import TodoContainer from '../containers/TodoContainer.js';

const TodoApp = () => {
    return (
        <div>
            {Routes}
            <h1>React Todo List</h1>
            <TodoContainer />
        </div>
    );
};

export default TodoApp;
