import React, { Component } from 'react';
import { Loading } from './Loading';

class ClassState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            loading: false
        };
    }

    // componentDidMount() {
    //     console.log('componentDidMount');
    // }

    // componentDidMount() {
    //     console.log('componentDidMount');
    // }

    componentDidUpdate() {
        console.log('Update');
        if (!!this.state.loading) {
            setTimeout(() => {
                this.setState({ loading: false });
            }, 3000);
        }
    }
    
    render() {
        const { name } = this.props
        return (
            <div>
                <h2>Eliminar {name}</h2>

                <p>Por favor escribe el codigo de seguridad.</p>

                {this.state.error && (
                    <p>Codigo de seguridad incorrecto</p>
                )}

                {this.state.loading && (
                    <Loading />
                )}


                <input  placeholder='Codeigo de seguridad'/>
                <button
                    onClick={() => this.setState({ loading: true })}
                >Comprobar</button>
            </div>
        )
    }
}

export { ClassState }