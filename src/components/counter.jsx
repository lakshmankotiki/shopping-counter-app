import React from 'react';

class Counter extends React.Component {
    state = {
        count: this.props.value
    };

    handleIncrement = (product) => {
        this.setState({ count: this.state.count + 1 })
    };

    handleDelete = (e) => {
        console.log("eight", this);
    }

    render() {
        return(
            <div>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button onClick={() => this.handleIncrement({ id: 1 }) } className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.handleDelete() } className="btn btn-danger btn-sm ml-2">Delete</button>
            </div>
        )
    }

    // Refactoring: getting classes dynamically
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        // Object destructuring
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;