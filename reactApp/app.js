import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = [
                  {task: "Eat Bekfast"},
                  {task: "Grow the Ganja"},
                  {task: "Eat Sleep Poop"},
                  {task: "Repeat"}
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
        {this.props.task}
      </li>
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

class TodoList extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <ul>
        {dummyData.map((item) => <Todo task={item.task} />)}
      </ul>
    )
  }
}

class TodoApp extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h1>TODO LIST MOFO!!!!</h1>
        <InputLine/>
        <TodoList />
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
