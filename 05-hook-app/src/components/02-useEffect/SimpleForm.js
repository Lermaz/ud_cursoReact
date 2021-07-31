import React, { Fragment, useEffect, useState } from 'react'
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect( () => {

  }, [] );

  useEffect( () => {

  }, [formState] );

  useEffect( () => {

  }, [email] );

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [ target.name ]: target.value
    });
  }

  return (
    <Fragment>
      <h1>UseEffect</h1>
      <hr/>

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre"
          autoComplete="off"
          value={ name }
          onChange={ handleInputChange }
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Email"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
        />
      </div>

      { (name === '123') && <Message /> }
    </Fragment>
  )
}
