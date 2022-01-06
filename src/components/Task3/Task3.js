import React, { Component } from 'react'
import './task3.css'

// const initialState = {
//     data : [
//         {
//             title: 'ONE',
//             color: 'blue',
//         },
//         {
//             title: 'TWO',
//             color: 'red',
//         },
//         {
//             title: 'THREE',
//             color: 'green',
//         },
//         {
//             title: 'FOUR',
//             color: 'yellow',
//         },
//     ],
// }


class Task3 extends Component {

    constructor(props) {
        super(props);
        // this.initialState = {
        //     data : [
        //         {
        //             title: 'ONE',
        //             color: 'blue',
        //         },
        //         {
        //             title: 'TWO',
        //             color: 'red',
        //         },
        //         {
        //             title: 'THREE',
        //             color: 'green',
        //         },
        //         {
        //             title: 'FOUR',
        //             color: 'yellow',
        //         },
        //     ],
        // }
        this.state = this.initialState;
       
    }
   
    get initialState() {
        return {
            data : [
                {
                    title: 'ONE',
                    color: 'blue',
                },
                {
                    title: 'TWO',
                    color: 'red',
                },
                {
                    title: 'THREE',
                    color: 'green',
                },
                {
                    title: 'FOUR',
                    color: 'yellow',
                },
            ],
        };
    }

    removeDataBox(dataToDelete){
        const newDataArray = this.state.data.filter(data => data.title !== dataToDelete);
        this.setState({ data: newDataArray });       
      }

    handleReset =() => {
       this.setState(this.initialState);
    }

    render() {
        return (
            <div>
                <h1>Task 3</h1>
                <div className='app-container'>
                    {this.state.data.map((data) => {
                        return (
                            <div className="data-box" key={data.title}>
                                <div style={{ marginRight: 40, width: 100, height: 100, backgroundColor: data.color }} 
                                onClick={() => this.removeDataBox(data.title)}>
                                    <p>{data.title}</p>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
                <input type="submit" value="Reset" onClick={this.handleReset} />
            </div>
        );

    }
}

export default Task3
