const fs = require('fs')

// --------------------------------------------------------
// OPERACION DE LECTURA / ESCRITURA DE ARCHIVOS ASINCRÓNICA
// --------------------------------------------------------
//--------------------------------------------------
console.log('Inicio de lectura 1')
fs.readFile('../datos.txt', 'utf-8', (err, datos) => {
    if (!err) {
        console.log(datos)
        //--------------------------------------------------
        console.log('Inicio de escritura')
        fs.writeFile('../datos.txt', new Date().toLocaleString(), err => {
            if (!err) {
                console.log('escritura OK!') 
                //--------------------------------------------------
                console.log('Inicio de lectura 2')
                fs.readFile('../datos.txt', 'utf-8', (err, datos) => {
                    if (!err) console.log(datos)
                    else console.log('Error de lectura 2')
                })
                console.log('Fin de lectura 2')
                //--------------------------------------------------
            }
            else console.log('Error de escritura')
        })
        console.log('Fin de escritura')
        //--------------------------------------------------

    }
    else console.log('Error de lectura 1')
})
console.log('Fin de lectura 1')
//--------------------------------------------------

console.log('PROCESO SIGUIENTE!!!!!')


/*
// -------------------------------------------------------
// OPERACION DE LECTURA / ESCRITURA DE ARCHIVOS SINCRÓNICA
// -------------------------------------------------------
console.log('Inicio de lectura 1')
let datos = fs.readFileSync('../datos.txt','utf-8')
console.log(datos)
console.log('Fin de lectura 1')

console.log('Inicio de escritura')
fs.writeFileSync('../datos.txt', new Date().toLocaleString())
console.log('Fin de escritura')


console.log('Inicio de lectura 2')
datos = fs.readFileSync('../datos.txt','utf-8')
console.log(datos)
console.log('Fin de lectura 2')
*/
