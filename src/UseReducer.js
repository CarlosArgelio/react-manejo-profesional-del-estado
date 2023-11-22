import React, { useEffect, useReducer, useState } from "react";

const SECURITY_CODE = "paradigma";

function UseReducer({ name }) {
  const [state, dispatch] = useReducer(reducer, initialState);

//   const onWrite = (newValue) => {
//     setState({
//         ...state,
//         error: false,
//         value: newValue
//       });
//   }

  useEffect(() => {
    if (!!state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          dispatch({ type: 'CONFIRM' });
        } else {
            dispatch({ type: 'ERROR' });

        }
      }, 3000);
    }
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>{`Eliminar ${name}`}</h2>

        <p>Por favor escribe el codigo de seguridad.</p>

        {state.error && !state.loading && <p>Codigo de seguridad incorrecto</p>}
        {state.loading && <p>Cargando...</p>}

        <input
          placeholder="Codigo de seguridad"
          value={state.value}
          onChange={(e) => {
            dispatch({ type: 'WRITE', payload: e.target.value });
            // onWrite(e.target.value)
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: 'CHECK' });
          }}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <p>Pedimos confirmacion, estas seguro?</p>
        <button
          onClick={() => {
            dispatch({ type: 'DELETE' });
          }}
        >
          Si, elimnar
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'RESET' });
          }}
        >
          No, volver
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>Eliminado con exito la tarea</p>
        <button
          onClick={() => {
            dispatch({ type: 'RESET' });
          }}
        >
          Resetear y volver atras
        </button>
      </>
    );
  }
}






const initialState = {
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
};


const reducerObject = (state, payload) => ({
    'CONFIRM': {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
      },
    'ERROR': {
        ...state,
        error: true,
        loading: false
    },
    'CHECK': {
        ...state,
        loading: true
    },
    'DELETE': {
        ...state,
        deleted: true,
      },
    'RESET': {
        ...state,
        deleted: false,
        confirmed: false,
        value: "",
      },
    'WRITE': {
        ...state,
        value: payload
    }
});

const reducer = (state, action) => {
    console.log(state);
    if (reducerObject(state)[action.type]) {
        return reducerObject(state,  action.payload)[action.type];
    } else {
        return state;
    }
}


export { UseReducer };
