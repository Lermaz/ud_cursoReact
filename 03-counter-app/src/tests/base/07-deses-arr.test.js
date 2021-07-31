import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en desestructuración', () => {
  test('Debe de retornar un String y un Numero', () => {
    const [ letras, numeros ] = retornaArreglo();

    expect( letras ).toBe( 'ABC' );
    expect( typeof letras ).toBe( 'string' );

    expect( numeros ).toBe( 123 );
    expect( typeof numeros ).toBe( 'number' );
  })
  
})
