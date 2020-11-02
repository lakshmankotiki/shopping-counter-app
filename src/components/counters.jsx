import React from 'react';
import Counter from './counter';
import './counters.css';

class Counters extends React.Component {
    state = {
        counters: [
            {id: 1, value: 9},
            {id: 2, value: 19},
            {id: 3, value: 0},
            {id: 4, value: 88}
        ]
    }

    handleInrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counter[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters: counters });
    }

    handleReset = () => {
        const countersArr = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({ counters: countersArr });
    }

    handleDelete = (id) => {
        const counters = this.state.counters.filter(counter => counter.id !== id);
        this.setState({counters: counters});
    }

    render() {
        return(
            <React.Fragment>
                <h1>Shopping Counter App</h1>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm ml-2">Reset</button>
                { this.state.counters.map(counter =>
                    <Counter key={counter.id} onIncrement={() => this.handleInrement(counter)} onDelete={() => this.handleDelete(counter.id)} counter={counter} />)}
            </React.Fragment>
        )
    }
}

export default Counters;