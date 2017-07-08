import React from 'react';
import PropTypes from 'prop-types';
import InputLine from '../components/InputLine.js';
import TodoList from '../components/TodoList.js';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index.js';

let TodoContainer = ({addTodoFunc, todos}) => {
    return(
      <div>
          <InputLine addTodo={addTodoFunc}/>
          <TodoList todos={todos} />
      </div>
    );
};

TodoContainer.propTypes = {
    todos: PropTypes.array,
    addTodoFunc: PropTypes.func
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTodoFunc: (id, task) => dispatch(addTodo(id, task))
    };
};

TodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer);

export default TodoContainer;
