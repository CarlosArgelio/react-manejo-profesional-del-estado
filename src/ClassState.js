import React, { Component } from 'react';
import { Loading } from './Loading';

const SECURITY_CODE = 'paradigma';

class ClassState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
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
                if ( SECURITY_CODE === this.state.value ) {
                    this.setState({ error: false, loading: false });
                } else {
                    this.setState({ error: true, loading: false });
                }
            }, 3000);
        }
    }
    
    render() {
        const { name } = this.props
        return (
            <div>
                <h2>Eliminar {name}</h2>

                <p>Por favor escribe el codigo de seguridad.</p>

                {(this.state.error && !this.state.loading) && (
                    <p>Codigo de seguridad incorrecto</p>
                )}

                {this.state.loading && (
                    <Loading />
                )}


                <input  
                    placeholder='Codeigo de seguridad'
                    value={this.state.value}
                    onChange={(e) => {
                        this.setState({ value: e.target.value });
                    }}
                />
                <button
                    onClick={() => this.setState({ loading: true })}
                >Comprobar</button>
            </div>
        )
    }
}

export { ClassState }