import React, { Component } from 'react'
import './task2.css'


class Task2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color1: 'yellow',
            color2: 'red',
        };
    }

    changeColor(color1) {

        if (color1 === 'yellow') {
            this.setState({ color1: 'red', color2: 'yellow' });
        } else {
            this.setState({ color1: 'yellow', color2: 'red' });
        }
    }

    render() {
        let color1 = this.state.color1;
        let color2 = this.state.color2;
        return (
            <div>
                <h1>Task 2</h1>
                <div className="rectangle1">

                    <div style={{ marginRight: 40, width: 200, height: 200, backgroundColor: color1 }} onClick={() => this.changeColor(color1)}>
                    </div>

                    <div style={{ width: 200, height: 200, backgroundColor: color2 }} onClick={() => this.changeColor(color1)}>
                    </div>
                </div>
            </div>
        )
    }
}



export default Task2
