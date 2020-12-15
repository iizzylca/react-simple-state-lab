import React from 'react';

class Cell extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            color: props.value
        }
    }

    activateColor = () => {
        this.setState({
            color: '#333'
        })
    }

    render(){
        return(
            <div className="cell" style={{backgroundColor: `${this.state.color}`}} onClick={this.activateColor}></div>
        )
    }

}


export default Cell
