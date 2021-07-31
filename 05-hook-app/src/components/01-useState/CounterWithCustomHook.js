import React, { Fragment } from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

  const { state, increment, decrement, reset } = useCounter();

  return (
    <Fragment>
      <h1>Counter with Hook: { state }</h1>
      <hr/>

      <button onClick={ () => increment(2) } className="btn"> + 1</button>
      <button onClick={ () => decrement(2) } className="btn"> - 1</button>
      <button onClick={ reset } className="btn">Reset</button>
    </Fragment>
  )
}
