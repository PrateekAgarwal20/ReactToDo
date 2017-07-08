import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = [
                  {task: "Eat Bekfast", completed: false},
                  {task: "Grow the Ganja", completed: false},
                  {task: "Eat Sleep Poop", completed: true},
                  {task: "Repeat", completed: false}
               ]

class Todo extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <li>
        <input type="submit" value="X"/>
        {' '}
        {this.props.completed ? <div className='complete'>{this.props.task}</div> : <div className='incomplete'>{this.props.task}</div>}
      </li>
    )
  }
}

class TodoList extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <ul>
        {this.props.todos.map((item) => <Todo task={item.task} completed={item.completed} />)}
      </ul>
    )
  }
}

class InputLine extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <input type="text" placeholder="Enter task here..."/>
        <input type="submit" value="Add todo"/>
      </div>
    )
  }
}

class TodoApp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    this.setState({
      todos: dummyData
    })
  }

  render(){
    return(
      <div>
        <h1>React Todo List</h1>
        <InputLine />
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
