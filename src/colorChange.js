import React, { Component } from 'react';

class ColorChange extends Component {
    render(){
        return (
            <div style={{textAlign: "center"}}>
                <h1 id={"text"}>Hello Shivanshu</h1>
                <button id={"red"} style={{padding: 10, margin: 4}} onClick={this.colorChange}>Red</button>
                <button id={"yellow"} style={{padding: 10, margin: 4}} onClick={this.colorChange}>Yellow</button>
                <button id={"blue"} style={{padding: 10, margin: 4}} onClick={this.colorChange}>Blue</button>
            </div>
    );
    }

    colorChange = (e) => {
        let color = e.target.id;
        document.getElementById("text").style.color = color;
    }
}

export default ColorChange;