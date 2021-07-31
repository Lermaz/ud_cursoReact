import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import PrimeraApp from "../components/PrimeraApp";

describe('Pruebas en PrimeraApp', () => {
  
  /*test('Debe de mostrar el mensaje "Hola, soy Isaac"', () => {
    
    const saludo = 'Hola, soy Isaac';
    const wrapped = render( <PrimeraApp saludo={ saludo } /> );

    expect( wrapped.getByText(saludo) ).toBeInTheDocument();
  });*/

  test('Debe de mostrar <PrimeraApp /> correctamente', () => {
    
    const saludo = 'Hola, soy Isaac';
    const wrapped = shallow( <PrimeraApp saludo={ saludo } /> );

    expect( wrapped ).toMatchSnapshot();
  });

  test('Debe de mostrar el subtitulo enviado por props', () => {
    
    const saludo = 'Hola, soy Isaac';
    const subtitulo = 'Soy un subtitulo';

    const wrapped = shallow( 
      <PrimeraApp 
        saludo={ saludo }
        subtitulo= { subtitulo } /> 
    );

    const textoParrafo = wrapped.find('p').text();
    
    expect( textoParrafo ).toBe( subtitulo );
  });
})