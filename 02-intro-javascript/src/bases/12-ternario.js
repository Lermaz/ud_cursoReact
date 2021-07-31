const activo = true;
const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
console.log(mensaje);

const mensaje2 = activo && 'Activo';
console.log(mensaje2);