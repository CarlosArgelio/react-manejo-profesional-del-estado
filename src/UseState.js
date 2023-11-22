import React, { useEffect, useState } from 'react';

function UseState({ name }) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!!loading) {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
    }, [loading]);


    return (
        <div>
            <h2>{`Eliminar ${name}`}</h2>

            <p>Por favor escribe el codigo de seguridad.</p>

            {error && (
                <p>Codigo de seguridad incorrecto</p>
            )}
            {loading && (
                <p>Cargando...</p>
            )}

            <input  placeholder='Codeigo de seguridad'/>
            <button 
                onClick={() => setLoading(true)}
            >Comprobar</button>
        </div>
    )
}

export { UseState }