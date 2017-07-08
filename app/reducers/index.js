import { combineReducers } from 'redux';
import addTodoReducer from './addTodoReducer.js';

// import * as types from '../actions/types';

export default combineReducers({
    todos: addTodoReducer
});
