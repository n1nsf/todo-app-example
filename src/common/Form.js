import React from 'react';

class Form extends React.Component {
    state = {
        text: ''
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    handleClick() {
        this.props.additem( this.state.text );
        this.setState({text: ''});
    }

    render() {
        return (
            <div>
                todo:
                <input type="text" onChange={ this.handleChange.bind(this) } value={ this.state.text }/>
                <button onClick={ this.handleClick.bind(this) } type="button">Add</button>
            </div>
        )
    }
}

export default Form