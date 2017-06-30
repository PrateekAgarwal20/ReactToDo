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

ReactDOM.render(<TodoList />, document.getElementById('root'));
