import React, { useEffect, useState } from 'react';

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [state, setState] = useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false
    });

    useEffect(() => {
        console.log('useEffect');
        if (!!state.loading) {
        setTimeout(() => {

            if (state.value === SECURITY_CODE) {
                setState({
                    ...state,
                    error: false,
                    loading: false,
                    confirmed: true,
                });
                console.log(state.confirmed);
            } else {
                setState({
                    ...state,
                    error: true,
                    loading: false,
                })
            }
            }, 3000);
        }
    }, [state.loading]);



    if (!state.deleted && !state.confirmed) {
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
    } else if (!!state.confirmed && !state.deleted) {
        return (
            <>
                <p>Pedimos confirmacion, estas seguro?</p>
                <button
                    onClick={() => {
                        setState({
                            ...state,
                            deleted: true,
                        })
                    }}
                >Si, elimnar</button>
                <button
                    onClick={() => {
                        setState({
                            ...state,
                            confirmed: false,
                            value: '',
                        })
                    }}
                >No, volver</button>
            </>
        );
    } else {
        return (
            <>
                <p>Eliminado con exito la tarea</p>
                <button
                    onClick={() => {
                        setState({
                            ...state,
                            deleted: false,
                            confirmed: false,
                            value: '',
                        })
                    }}
                >
                    Resetear y volver atras
                </button>
            </>
        )
    }
}

export { UseState }