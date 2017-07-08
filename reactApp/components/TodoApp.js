import React from 'react';
import InputLine from './InputLine.js';
import TodoList from './TodoList.js';

const dummyData = [
    { task: 'Eat Bekfast', completed: false },
    { task: 'Grow the Ganja', completed: false },
    { task: 'Eat Sleep Poop', completed: true },
    { task: 'Repeat', completed: false },
];

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    componentDidMount() {
        this.setState({
            todos: dummyData,
        });
    }

    render() {
        return (
            <div>
                <h1>React Todo List</h1>
                <InputLine />
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
}

export default TodoApp;
