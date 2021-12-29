import React, { Component } from 'react';

class StatesPractice extends Component { // A component can return only one root element.

    constructor(){
        super();
        this.state = {
            name : "Shivanshu",
            surname : "Panwar",
        }
    };

    render(){
        return (
            <div style={{textAlign: "center"}}>
                <h1> This is my info ... </h1>
                <h3>First Name : {this.state.name}</h3>
                <h3>Last Name : { this.state.surname}</h3>
                <button onClick={this.changeDetails}> Change </button>
            </div>
        );
    }

    changeDetails = () =>{
        this.setState({
            name : "Not Shivanshu",
            // surname : " Not Panwar",
        });
    }

}

export default StatesPractice;