import React from 'react';
import PropTypes from 'prop-types';
import InputLine from '../components/InputLine';
import TodoList from '../components/TodoList';
import {connect} from 'react-redux';
import {addTodo, deleteTodo} from '../actions/index';

let TodoContainer = ({addTodoFunc, deleteTodoFunc, todos}) => {
    return(
        <div>
            <InputLine addTodo={addTodoFunc}/>
            <TodoList todos={todos} deleteTodo={deleteTodoFunc}/>
        </div>
    );
};

TodoContainer.propTypes = {
    todos: PropTypes.array,
    addTodoFunc: PropTypes.func,
    deleteTodoFunc: PropTypes.func
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTodoFunc: (id, task) => dispatch(addTodo(id, task)),
        deleteTodoFunc: (id) => dispatch(deleteTodo(id))
    };
};

TodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer);

export default TodoContainer;
