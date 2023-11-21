import React, { Component } from 'react';

class ClassState extends Component {
    render() {
        return (
            <div>
                <h2>Eliminar ClassState</h2>

                <p>Por favor escribe el codigo de seguridad.</p>

                <input  placeholder='Codeigo de seguridad'/>
                <button>Comprar</button>
            </div>
        )
    }
}

export { ClassState }