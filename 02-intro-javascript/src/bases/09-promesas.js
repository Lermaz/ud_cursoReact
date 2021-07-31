import { getHeroeById } from './bases/08-imp-exp'

/*const promesa = new Promise( (resolve, reject) => {

  setTimeout(() => {
    
  }, 2000);

});

promesa.then( () => {
  console.log('Then de la promesa')
})*/

const getHeroeByIdAsync = ( id ) => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById( id );
      if ( p1 ) {
        resolve( p1 );
      } else {
        reject('No se poudo encontrar el héroe');
      }
    }, 2000);
  })
}

getHeroeByIdAsync(1)
  .then( console.log )
  .catch( console.warn );