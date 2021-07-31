import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';
import '../03-examples/multiple.css';

export const CallbackHook = () => {
  
  const [counter, setCounter] = useState( 10 );

  const increment = useCallback( (num) => {
    setCounter( c => c + num );
  }, [ setCounter ]);

  useEffect( () => {
    
  }, [ increment ]);

  return (
    <Fragment>
      <h1>useCallback Hook: { counter }</h1>
      <hr />

      <ShowIncrement increment={ increment }/>
    </Fragment>
  )
}
