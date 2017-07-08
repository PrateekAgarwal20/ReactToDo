import React from 'react';
import PropTypes from 'prop-types';

class InputLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: ''
        };
    }

    handleTyping(event) {
        this.setState({
            typedText: event.target.value
        });
    }

    handleClick() {
        this.props.addTodo(4, this.state.typedText);
        this.setState({
            typedText: ''
        });
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Enter task here..." onChange={(event) => this.handleTyping(event)} value={this.state.typedText}/>
                <input type="submit" value="Add todo" onClick={() => this.handleClick()}/>
            </div>
        );
    }
}

InputLine.propTypes = {
    addTodo: PropTypes.func
};

export default InputLine;
