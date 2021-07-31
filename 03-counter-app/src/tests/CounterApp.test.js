import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from '../components/CounterApp';

describe('Pruebas en CounterApp', () => {
  
  let wrapper = shallow( <CounterApp /> );
  
  beforeEach( () => {
    wrapper = shallow( <CounterApp /> );
  });

  test('Debe de mostrar <CounterApp /> correctamente', () => {
    
    expect( wrapper ).toMatchSnapshot();
  });

  test('Debe de mostrar el valor por defecto de 100', () => {
    
    const value = 100;
    const wrapped = shallow( <CounterApp value={ value } /> );

    const counter = wrapped.find('h2').text().trim();

    expect( counter ).toBe( `${ value }` );
  });

  test('Debe de incrementar con el botón de +1', () => {
    
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text().trim();

    expect( counterText ).toBe('11');
  });
  
  test('Debe de decrementar con el botón de -1', () => {
    
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text().trim();

    expect( counterText ).toBe('9');
  });

  test('Debe de colocar el valor por defecto con el botón de reset', () => {
  
    const value = 105;
    const wrapped = shallow( <CounterApp value={ value } /> );

    wrapped.find('button').at(0).simulate('click');
    wrapped.find('button').at(0).simulate('click');
    wrapped.find('button').at(1).simulate('click');

    const counterText = wrapped.find('h2').text().trim();

    expect( counterText ).toBe('105');
  })
  
})
