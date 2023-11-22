import React, { Component } from 'react';

class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            loading: false
        };
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }    
    render() {
        return (
            <p>Cargando...</p>
        )
    }
}

export { Loading }