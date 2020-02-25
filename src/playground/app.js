
class IndecisionApp extends React.Component {
    constructor(props) {
        //Below are the props
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        }
    }
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
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handlePick() {
            const randomNum = Math.floor(Math.random() * this.state.options.length)
            const option = this.state.options[randomNum]
            alert(option)
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter Option'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option Already Exists'
        }
        this.setState((prevState) => ({ 
            options: prevState.options.concat(option)
            })) 
    }
    render() {
        const subtitle = 'Computers Run the World!!!'
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

// Stateless functional component
const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        )
    }

Header.defaultProps = {
    title: 'INDECISION'
}

// Class-based component
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }


// Stateless functional component
const Action = (props) => {
    return (
        <div>
            <button 
                //Call function w/o ()
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    )

}

// Class-based component
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should I do?
//                     </button>
//             </div>
//         )
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Add Option</p>}
            {
                props.options.map((option) => (
                <Option 
                key={option} 
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
                />
                ))
            }
        </div>
    )
}

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option}/>)
//                 }
//             </div>
//         )
//     }
// }

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
            onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}
            >
                Remove
            </button>
        </div>
    )
}

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         )
//     }
// }

class AddOption extends React.Component {
    //To override a propr, need to add constructor function in component
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
                </form>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

