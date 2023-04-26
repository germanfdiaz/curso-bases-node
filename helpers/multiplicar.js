const fs = require('fs');

const colors = require('colors');

/* Modo con promesas
const crearArchivo = (base = 5) => {

    return new Promise((resolve, reject) => {
        console.log('=============================================');
        console.log(`                 Tabla del ${base}`);
        console.log('=============================================');

        let salida = '';

        for(let i = 1; i <= 10; i++ ) {
            //console.log(`${base} x ${i} = ${base * i}`);
            salida += `${base} x ${i} = ${base * i}\n`;
            console.log(salida);
        };

        fs.writeFileSync(`tabla${base}.txt`, salida);

        resolve(`tabla${base}.txt`);
    })

    
}*/

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {
        

        let salida, consola = '';

        for(let i = 1; i <= hasta; i++ ) {
            //console.log(`${base} x ${i} = ${base * i}`);
            consola += `${base} ${'x'.green}  ${i} ${'='.green} ${base * i}\n`;
            salida += `${base} x  ${i} = ${base * i}\n`;
        };
        
        if (listar) {
            console.log('============================================='.green);
            console.log('                 Tabla del :'.green, colors.blue( base ));
            console.log('============================================='.green);
            console.log(consola);
        }

        fs.writeFileSync(`tabla${base}.txt`, salida);

        return `tabla${base}.txt`;
    } catch (error) {
        throw error;
    }
        


    
}


module.exports = {
    crearArchivo,
}