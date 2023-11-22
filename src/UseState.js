import React, { useEffect, useState } from 'react';

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('useEffect');
        if (!!loading) {
        setTimeout(() => {

            if (value !== SECURITY_CODE) {
                setError(true);
            } else if (error === true) {
                setError(false);
            }
            setLoading(false);
            }, 3000);
        }
    }, [loading]);


    return (
        <div>
            <h2>{`Eliminar ${name}`}</h2>

            <p>Por favor escribe el codigo de seguridad.</p>

            {(error && !loading) && (
                <p>Codigo de seguridad incorrecto</p>
            )}
            {loading && (
                <p>Cargando...</p>
            )}

            <input
              placeholder='Codeigo de seguridad'
              value={value}
              onChange={(e) => {
                setError(false)
                setValue(e.target.value)
              }}
            />
            <button 
                onClick={() => setLoading(true)}
            >Comprobar</button>
        </div>
    )
}

export { UseState }