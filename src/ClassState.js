import React, { Component } from 'react';

class ClassState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false
        };
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


                <input  placeholder='Codeigo de seguridad'/>
                <button
                    onClick={() => this.setState({ error: !this.state.error })}
                >Comprobar</button>
            </div>
        )
    }
}

export { ClassState }