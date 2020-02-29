
import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    //To override a prop, need to add constructor function in component
    //Don't need constructor function if use arrow function
    // constructor(props) {
    //     super(props)
    //     this.handleAddOption = this.handleAddOption.bind(this)
        //Below no longer needed, thanks to installing babel-plugin-transform-class-properties, when state set above before constructor
        // this.state = {
        //     error: undefined
        // }
    //}
    //W/arrow, function is now a class propr and doesn't need manual bind() above
    handleAddOption = (e) => {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        this.setState(() => ({ error }))

        if (!error) {
            e.target.elements.option.value = ''
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option"onSubmit={this.handleAddOption}>
                <input className="add-option__input"type="text" name="option" placeholder="Type Location"></input>
                <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}


