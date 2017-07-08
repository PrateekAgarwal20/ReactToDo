import { combineReducers } from 'redux';
import todoReducer from './todoReducer.js';

// import * as types from '../actions/types';

export default combineReducers({
    todos: todoReducer
});
