import React from 'react';

export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button
                className="square"
                onClick={() => this.setState({ value: 'X' })}
                onDoubleClick={() => this.setState({ value: 'O' })}
            >
                {this.state.value}
            </button>
        );
    }
}