import React from 'react';
import Counter from './counter';
import './counters.css';

class Counters extends React.Component {
    state = {
        counters: [
            {id: 1, value: 10},
            {id: 2, value: 20},
            {id: 3, value: 0},
            {id: 4, value: 98}
        ]
    }
    render() {
        return(
            <React.Fragment>
                <h1>Shopping Counter App</h1>
                { this.state.counters.map(counter =>
                    <Counter key={counter.id} value={counter.value} selected={true} />)}
            </React.Fragment>
        )
    }
}

export default Counters;