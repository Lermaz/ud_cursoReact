import React, { Fragment, useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
import './focus.css';

export const RealExampleRef = () => {

  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <h1>Real Example Ref</h1>
      <hr />

      { show && <MultipleCustomHooks />}

      <button 
        className="btn btn-primary mt-5"
        onClick={ () => { setShow( !show ); }} >
        Show/Hide
      </button>
    </Fragment>
  )
}
