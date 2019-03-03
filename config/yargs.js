const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('listar', 'Lista las tareas', { completado })
    .command('actualizar', 'Actualiza el estado complemento de una tarea', { descripcion, completado })
    .command('borrar', 'Elimina las tareas', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
};