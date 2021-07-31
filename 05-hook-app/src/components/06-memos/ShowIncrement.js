import React, { Fragment } from 'react'

export const ShowIncrement = ({ increment }) => {

  return (
    <Fragment>
      <button
        className="btn btn-primary"
        onClick={ () => {
          increment( 5 );
        }}>
        Incrementar
      </button>
    </Fragment>
  )
}
