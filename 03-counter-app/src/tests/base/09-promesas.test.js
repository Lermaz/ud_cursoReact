import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
  
  /*test('Debe de retornar un Héroe async', done => {
    
    const id = 1;

    getHeroeByIdAsync( id )
      .then( heroe => {
        expect( heroe ).toBe( heroes );
        done();
      });
  });

  test('Debe de obtener un error si el Héroe por id no existe', done => {

    const id = 10;
    getHeroeByIdAsync( id )
      .catch( error => {
        expect( error ).toBe( 'No se pudo encontrar el héroe' );
        done();
      });
  })*/

  test('Debe de retornar un Héroe async 2', () => {
    
    const id = 1;
    expect( getHeroeByIdAsync( id ) ).resolves.toBe( heroes[0] );
  });

  test('Debe de obtener un error si el Héroe por id no existe 2', () => {

    const id = 10;
    expect( getHeroeByIdAsync( id ) ).rejects.toBe( 'No se pudo encontrar el héroe' );
  })
})
