import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0
    };
    render() {
        return(
            // Fragments lets you group a list of children without adding extra nodes as parent which is of useless
            <React.Fragment>
                <h1><u>Shopping Counter App</u></h1>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
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