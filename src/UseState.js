import React, { useState } from 'react';

function UseState({ name }) {
    const [error, setError] = useState(false);

    return (
        <div>
            <h2>{`Eliminar ${name}`}</h2>

            <p>Por favor escribe el codigo de seguridad.</p>

            {error && (
                <p>Codigo de seguridad incorrecto</p>
            )}

            <input  placeholder='Codeigo de seguridad'/>
            <button 
                onClick={() => setError(!error)}
            >Comprobar</button>
        </div>
    )
}

export { UseState }