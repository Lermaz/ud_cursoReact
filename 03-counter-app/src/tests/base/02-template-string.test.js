import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
  test('Prueba en el método de getSaludo', () => {
    const nombre = 'Fernando';

    const saludo = getSaludo( nombre );

    expect( saludo ).toBe( 'Hola ' + nombre );
  })

  // getSaludo debe de retornar Hola Helen! si no hay argumento nombre
  test('getSaludo debe de retornar Hola Helen! si no hay argumento nombre', () => {
    const saludo = getSaludo();

    expect( saludo ).toBe( 'Hola Helen' );
  })
})
