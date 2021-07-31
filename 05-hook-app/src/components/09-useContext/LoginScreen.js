import React, { Fragment, useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

  const { setUser } = useContext(UserContext);

  const addUser = () => {
    setUser({
      id: 1234,
      name: 'Isaac Lerma',
      email: 'lermalizarraga@gmail.com'
    });
  };

  return (
    <Fragment>
      <h1>LoginScreen</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={ addUser }>
        Login
      </button>
    </Fragment>
  )
}
