const persona = {
  nombre: 'Isaac',
  apellido: 'Lerma',
  edad: 24,
  direccion: {
    ciudad: 'Mazatlán',
    zip: 82165,
    lat: 14.3232,
    lng: 34.9233321
  }
};

console.log({persona});
//console.table({persona});
const persona2 = { ...persona };
persona2.nombre = 'Helen';
console.log(persona2);