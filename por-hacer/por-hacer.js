const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error(err)
        else
            console.log('Se guardo exitosamente');
    });
}
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')
            //console.log(listadoPorHacer);
    } catch (error) {
        listadoPorHacer = [];
    }

};

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const getListar = (completado) => {
    cargarDB();
    let listaNueva = listadoPorHacer.filter(tarea => tarea.completado == JSON.parse(completado));
    return listaNueva;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = JSON.parse(completado);
        guardarDB();
        return true;
    } else return false;
};

const borrar = (descripcion) => {
    cargarDB();
    let listaNueva = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (listadoPorHacer.length === listaNueva.length) {
        return false;
    } else {
        listadoPorHacer = listaNueva;
        guardarDB();
        return true;
    }
    // let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    // if (index >= 0) {
    //     listadoPorHacer.splice(1, index);
    //     guardarDB();
    //     return true;
    // } else return false;
};

module.exports = {
    crear,
    getListar,
    actualizar,
    borrar
}