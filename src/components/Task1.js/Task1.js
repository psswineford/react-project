import React, { Component } from 'react'

class Task1 extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleClear = () => {
        this.setState({value: ''});
    }

    render() {
        return (
            <div>
                <h1>Task 1</h1>

                <form id="task1-form">
                    <div>
                        <label>
                            Input Text:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div>
                    <label>
                        Text area:
                        <textarea  value={this.state.value} readOnly />
                    </label>
                    </div>
                    <input type="submit" value="Clear" onSubmit={this.handleClear} />
                </form>

            </div>
        )
    }
}

export default Task1
