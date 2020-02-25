//default export comes immediately after import
//could name it something else, but cannot do with other imports

import React from 'react';
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handlePick = () => {
            const randomNum = Math.floor(Math.random() * this.state.options.length)
            const option = this.state.options[randomNum]
            this.setState(() => ({
                selectedOption: option
            }))
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter Option'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option Already Exists'
        }
        this.setState((prevState) => ({ 
            options: prevState.options.concat(option)
            })) 
    }
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    // constructor(props) {
    //     //Below are the props
    //     super(props)
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    //     this.handlePick = this.handlePick.bind(this)
    //     this.handleAddOption = this.handleAddOption.bind(this)
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this)
    //     this.state = {
    //         options: []
    //     }
    // }
    //Life cycle methods, preset functions, only in class based component function
    componentDidMount() {
        try {
            //Reads data from localStorage; see next life cycle method for where data is stored
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
                if (options) {
                    this.setState(() => ({ options }))
            }
        } catch (e) {
            // Do nothing
        }
    }
    //When props or state values change
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            //Stores data so that it doesn't go away when page is refreshed
            //Mainly used when no DB coded to connect
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount() {
        console.log('ComponentWillUnmount')
    }
    render() {
        const subtitle = 'The Computer Will Randomly Choose Your Vacation Spot'
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
                    <div className="widget">
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                handleAddOption={this.handleAddOption}
                />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}

export default IndecisionApp
