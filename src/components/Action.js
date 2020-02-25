
import React from 'react';


// Stateless functional component
const Action = (props) => (
    <div>
        <button 
            className="big-button"
            //Call function w/o ()
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
            Where Should We Go?
        </button>
    </div>
)

export default Action

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


