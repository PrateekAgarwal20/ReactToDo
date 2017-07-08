import React from 'react';
import PropTypes from 'prop-types';
import InputLine from '../components/InputLine';
import TodoList from '../components/TodoList';
import {connect} from 'react-redux';
import {addTodo, deleteTodo, toggleTodo} from '../actions/index';

let TodoContainer = ({addTodoFunc, deleteTodoFunc, toggleTodoFunc, todos}) => {
    return(
        <div>
            <InputLine addTodo={addTodoFunc}/>
            <TodoList todos={todos} deleteTodo={deleteTodoFunc} toggleTodo={toggleTodoFunc}/>
        </div>
    );
};

TodoContainer.propTypes = {
    todos: PropTypes.array,
    addTodoFunc: PropTypes.func,
    deleteTodoFunc: PropTypes.func,
    toggleTodoFunc: PropTypes.func
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTodoFunc: (id, task) => dispatch(addTodo(id, task)),
        deleteTodoFunc: (id) => dispatch(deleteTodo(id)),
        toggleTodoFunc: (id) => dispatch(toggleTodo(id))
    };
};

TodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer);

export default TodoContainer;
