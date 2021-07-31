const personajes = ['Isaac', 'Helen', 'Ana Elsa'];
const [ , , nombre ] = personajes;
console.log( nombre )

const retornaArreglo = () => {
  return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

const useState = ( valor ) => {
  return [ valor, () => { console.log('Hola Mundo') } ];
}

const [ nombre, setNombre ] = useState('Isaac');
setNombre();