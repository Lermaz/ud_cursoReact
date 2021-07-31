//import { heroes, owners } from '../data/heroes'
import heroes from '../data/heroes'

export const getHeroeByid = (id) => heroes.find( heroe => heroe.id === id);

//console.log( getHeroeByid(2) );

export const getHeroeByOwner = ( owner ) => heroes.filter( heroe => heroe.owner === owner);
//console.log ( getHeroeByOwner('DC') );

//console.log(owners);