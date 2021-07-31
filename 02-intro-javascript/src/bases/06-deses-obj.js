// Desestructuración
// Asignación Desestructurante
const persona = {
  nombre: 'Isaac',
  edad: 24,
  clave: 'Lermaz'
};

//const { nombre, edad, clave } = persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

const useContext = ({ nombre, edad, clave, rango = 'Capitán' }) => {
  //console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.123,
      lng: -12.123
    }
  }
}

const { nombreClave, anios, latlng:{ lat, lng } } = useContext( persona );
//const { lat, lng } = latlng;

console.log(nombreClave, anios);
console.log( lat, lng );