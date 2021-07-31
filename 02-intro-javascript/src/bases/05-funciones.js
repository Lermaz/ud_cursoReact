const saludar = function( nombre ) {
  return `Hola, ${nombre}`;
}

const saludar2 = ( nombre ) => {
  return `Hola, ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

console.log(saludar3('Isaac'));

const getUser = () => ({
  uid: 'ABC123',
  username: 'Lermaz'
})

const user = getUser();
console.log(user);

const getUsuarioActivo = ( nombre ) => ({
  uid: 'ABC123',
  username: 'Lermaz'
})

const usuarioActivo = getUsuarioActivo('Isaac');
console.log(usuarioActivo);