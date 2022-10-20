//import { writeFile } from 'node:fs';

// const { argv } = require('process');
const {crearArchivo3} = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear();

//const base=6;

//Obtener los argv de consola de forma manual 
// const [ , ,args3='base=5'] = process.argv;
// const [ , base=5] = args3.split('=');
// console.log(base);

crearArchivo3(argv.base,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo,'Creado'.green))
    .catch(err=>console.log(err));

