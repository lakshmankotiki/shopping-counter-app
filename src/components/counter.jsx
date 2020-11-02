import React from 'react';

class Counter extends React.Component {
    render() {
        return(
            <div>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button onClick={this.props.onIncrement} className="btn btn-secondary btn-sm m-2">Increment</button>
                <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        )
    }

    // Refactoring: getting classes dynamically
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        // Object destructuring
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;