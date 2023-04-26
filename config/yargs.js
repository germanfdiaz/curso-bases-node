const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de multiplicacion para una tabla'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        //demandOption: true,
        default: false,
        describe: 'Listar las tablas por consola al generar el archivo'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        //demandOption: true,
        default: 10,
        describe: 'Hasta donde hacer la multiplicacion desde 1'
    })
    .check( (argv, options) =>{
        // console.log('yargs:', argv);
        if(isNaN(argv.b)){
        throw 'La base tiene que ser un numero';
        }
        return true;
    })
    .argv;

    module.exports = argv;