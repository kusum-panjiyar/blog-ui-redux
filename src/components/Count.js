import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset} from '../actions/countAction'

function Count(props){
    const handleUpClick=()=>{
        props.dispatch(increment())
    }
    const handleDownClick=()=>{
        props.dispatch(decrement())
    }
    const handleResetClick=()=>{
        props.dispatch(reset())
    }
    
    return(
        <div>
            <h1>Count</h1>
            <h1>{props.count}</h1>
            <button onClick={handleUpClick}>Up</button>
            <button onClick={handleDownClick}>Down</button>
            <button onClick={handleResetClick}>Reset</button>

        </div>
    )
} 
const mapStateToProps=(state)=>{
    return {
        count:state.count
    }
}
// wrapped component
// const wrappedComponent = connect(mapStateToProps)(Count)
// export default wrappedComponent
export default connect(mapStateToProps)(Count)