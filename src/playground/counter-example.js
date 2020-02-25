
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)   
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count +1
            }
        })
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        })
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

// //Below is same as above but translated by Babel. Need to install Babel locally to machine in order to write above code and below code will run
// // var template = React.createElement(
// //     "h1",
// //     { id: "someid" },
// //     "Indecision App"
// // );

// const user = {
//     name: 'Mike',
//     age: 34,
//     location: 'Tampa'
// }

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     } else {
//         return undefined
//     }
// }

// // const templateTwo = (
// //     <div>
// //         <h1>{user.name ? user.name : 'Anon' /*ternary operator; = if user.name exists, use user.name, else use Anon*/}</h1>
// //         {(user.age && user.age >= 18) && <p>Age: {user.age}</p> /*another ternary op*/}
// //         {getLocation(user.location)}
// //     </div>
// // )

// let count = 0
// const addOne = () => {
//     count ++
//     renderCounterApp()
// }
// const minusOne = () => {
//     count --
//     renderCounterApp()
// }
// const reset = () => {
//     count = 0
//     renderCounterApp()
// }


// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )
//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp()

