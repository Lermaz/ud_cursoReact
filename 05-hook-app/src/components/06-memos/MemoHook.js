import React, { Fragment, useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../03-examples/multiple.css';

export const MemoHook = () => {

  const { counter, increment } = useCounter( 1000 );
  const [ show, setShow ] = useState(true)
  const memoProcesoPesado = useMemo(() => procesoPesado( counter ), [ counter ]);
  
  return (
    <Fragment>
      <h1>MemoHook</h1>
      <h3>Counter: <small>{ counter }</small> </h3>
      <hr />

      <p>{ memoProcesoPesado }</p>
      <button
        className="btn btn-primary"
        onClick={ increment } >
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={ () => {
          setShow( !show );
        }} >
        Show/Hide { JSON.stringify( show ) }
      </button>
    </Fragment>
  )
}
