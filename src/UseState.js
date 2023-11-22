import React, { useEffect, useState } from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  const onConfirmed = () => {
    setState({
      ...state,
      error: false,
      loading: false,
      confirmed: true,
    });
  };

  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false,
    });
  };

  const onWrite = (newValue) => {
    setState({
        ...state,
        error: false,
        value: newValue
      });
  }

  const onCheck = () => {
    setState({
        ...state,
        loading: true,
      });
  }

  const onDeleted = () => {
    setState({
        ...state,
        deleted: true,
      });
  }

  const onReset = () => {
    setState({
        ...state,
        deleted: false,
        confirmed: false,
        value: "",
      });
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
          onChange={(e) => {
            onWrite(e.target.value)
          }}
        />
        <button
          onClick={() => {
            onCheck()
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
            onDeleted()
          }}
        >
          Si, elimnar
        </button>
        <button
          onClick={() => {
            onReset()
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
            onReset()
          }}
        >
          Resetear y volver atras
        </button>
      </>
    );
  }
}

export { UseState };
