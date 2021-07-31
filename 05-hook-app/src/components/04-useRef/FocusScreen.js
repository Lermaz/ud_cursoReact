import React, { Fragment, useRef } from 'react'
import './focus.css';

export const FocusScreen = () => {

  const inputRef = useRef();
  
  const handleClick = () => {
    inputRef.current.select();
  }

  return (
    <Fragment>
      <h1>Focus Screen</h1>
      <hr/>

      <input
        ref={ inputRef }
        className="form-control"
        placeholder="Nombre"
      />

      <button 
        className="btn btn-outline-primary mt-5"
        onClick={ handleClick } >
        Focus
      </button>
    </Fragment>
  )
}
