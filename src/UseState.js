import React, { useEffect, useState } from 'react';

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [state, setState] = useState({
        value: '',
        error: false,
        loading: false
    });

    useEffect(() => {
        console.log('useEffect');
        if (!!state.loading) {
        setTimeout(() => {

            if (state.value !== SECURITY_CODE) {
                setState({
                    ...state,
                    error: true,
                })
            } else if (state.error === true) {
                setState({
                    ...state,
                    error: false,
                })
            }
            setState({
                ...state,
                loading: false,
            })
            }, 3000);
        }
    }, [state.loading]);


    return (
        <div>
            <h2>{`Eliminar ${name}`}</h2>

            <p>Por favor escribe el codigo de seguridad.</p>

            {(state.error && !state.loading) && (
                <p>Codigo de seguridad incorrecto</p>
            )}
            {state.loading && (
                <p>Cargando...</p>
            )}

            <input
              placeholder='Codigo de seguridad'
              value={state.value}
              onChange={(e) => {
                setState({
                    ...state,
                    error: false,
                    value: e.target.value,
                })
              }}
            />
            <button 
                onClick={() => {
                    setState({
                        ...state,
                        loading: true,
                    })
                }}
            >Comprobar</button>
        </div>
    )
}

export { UseState }