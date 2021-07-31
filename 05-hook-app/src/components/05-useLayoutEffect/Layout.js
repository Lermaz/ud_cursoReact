import React, { Fragment, useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

  const { counter, increment } = useCounter(1);
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
  const { quote } = !!data && data[0];
  const pTag = useRef()

  useLayoutEffect( () => {
    pTag.current.getBoundingClientRect();
  }, [quote]);

  return (
    <Fragment>
      <h1>Layout Effect</h1>
      <hr/>

      <blockquote className="blockquote text-right">
        <p 
        className="mb-0"
        ref={ pTag } > 
          { quote }
        </p>
      </blockquote>

      <button 
        className="btn btn-primary"
        onClick={ increment } >
        Siguiente quote
      </button>
    </Fragment>
  )
}
