import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index.js';
const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><TodoApp /></Provider>, document.getElementById('root'));
