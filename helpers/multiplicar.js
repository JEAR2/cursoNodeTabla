const fs = require('fs');
const colors = require('colors');

//Función creada sin promesa
const crearArchivo = (base=5)=>{
    console.log('========================');
    console.log('===== Tabla del:',base,'=====');
    console.log('========================');
    let salida = '';
    for (let index = 1; index <= 10; index++) {
        const element = base * index;
        salida+=(`${base} x ${index} = ${element}\n`);
    }
    console.log(salida);
    // fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
    //     if (err) throw err;
    //     console.log(`tabla-${base}.txt creado!!`);
    // })

    fs.writeFileSync(`tabla-${base}.txt`,salida);
    console.log(`tabla-${base}.txt creado!!`);
}

//Función modificada a promesa
const crearArchivo2 = (base)=>{
    return new Promise((resolve,reject)=>{
        console.log('========================');
        console.log('===== Tabla del:',base,'=====');
        console.log('========================');
        let salida = '';
        for (let index = 1; index <= 10; index++) {
            const element = base * index;
            salida+=(`${base} x ${index} = ${element}\n`);
        }
        if(salida){
            console.log(salida);
            fs.writeFileSync(`tabla-${base}.txt`,salida);
            resolve(`tabla-${base}.txt`)
        }else{
            reject(`Se generó un problema!`);
        }
    })
}

//Fucnión modificada con async para devolver como promesa
const crearArchivo3 = async (base=5,listar,hasta)=>{
    try {
        let salida = '';
        let consola = '';
        for (let index = 1; index <= hasta; index++) {
            const element = base * index;
            salida+=(`${base} x ${index} = ${element}\n`);
            consola+=(`${colors.green(base)} ${colors.red('x')} ${colors.green(index)} = ${colors.red(element)}\n`);
        }
        if(listar){
        
        console.log('========================'.green);
        console.log('===== Tabla del:'.green,base,'====='.green);
        console.log('========================'.green);
            console.log(consola);
        }
        
        // fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
        //     if (err) throw err;
        //     console.log(`tabla-${base}.txt creado!!`);
        // })
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
   
}


module.exports = {
    crearArchivo3
}