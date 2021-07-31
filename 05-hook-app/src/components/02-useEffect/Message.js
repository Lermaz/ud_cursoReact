import React, { Fragment, useEffect } from 'react'

export const Message = () => {

  useEffect(() => {
    
    const mouseMove = (e) => {
      console.log(' :D ');
    }
    
    window.addEventListener('mousemove', mouseMove );
    return () => {
      window.removeEventListener('mousemove', mouseMove );
    }
  }, [])

  return (
    <Fragment>
      <h3>Eres Genial!</h3>
    </Fragment>
  )
}