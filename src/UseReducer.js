import React, { useEffect, useReducer, useState } from "react";

const SECURITY_CODE = "paradigma";

function UseReducer({ name }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onConfirmed = () => dispatch({ type: actionTypes.CONFIRM })
  const onError = () => dispatch({ type: actionTypes.ERROR });
  const onCheck = () => dispatch({ type: actionTypes.CHECK });
  const onDeleted = () => dispatch({ type: actionTypes.DELETE });
  const onReset = () => dispatch({ type: actionTypes.RESET });
  const onWrite = (event) => {
    dispatch({ type: actionTypes.WRITE, payload: event.target.value });
  }


  useEffect(() => {
    if (!!state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
            onConfirmed();
        } else {
            onError();

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
        //   onChange={(e) => {
        //     onWrite(e.target.value)
        //   }}
          onChange={onWrite}
        />
        <button
          onClick={onCheck}
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
          onClick={onDeleted}
        >
          Si, elimnar
        </button>
        <button
          onClick={onReset}
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
          onClick={onReset}
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

const actionTypes = {
    CONFIRM: "CONFIRM",
    ERROR: "ERROR",
    CHECK: "CHECK",
    DELETE: "DELETE",
    RESET: "RESET",
    WRITE: "WRITE",
}

const reducerObject = (state, payload) => ({
    [actionTypes.CONFIRM]: {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
      },
    [actionTypes.ERROR]: {
        ...state,
        error: true,
        loading: false
    },
    [actionTypes.CHECK]: {
        ...state,
        loading: true
    },
    [actionTypes.DELETE]: {
        ...state,
        deleted: true,
      },
    [actionTypes.RESET]: {
        ...state,
        deleted: false,
        confirmed: false,
        value: "",
      },
    [actionTypes.WRITE]: {
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
