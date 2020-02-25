
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisiblity() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
            {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
            <div>
                <p>Extra details</p>
            </div>
        )}
        </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))





// let visibility = false

// const toggleVisibility = () => {
//     visibility = !visibility //flips back and forth
//     render()
// }

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Extra details</p>
//                 </div>
//             )}
//         </div>
//     )
//     ReactDOM.render(jsx, document.getElementById('app'))
// }

// render()

