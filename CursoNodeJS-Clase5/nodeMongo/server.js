const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    nombre : String,
    edad: Number
})
const usuarioModel = mongoose.model('usuarios',usuarioSchema)


const urlMongoAtlas = 'mongodb+srv://daniel:daniel123@misdatos-fs00f.mongodb.net/mibase'
const urlMongoLocal = 'mongodb://localhost/mibase'


mongoose.connect(urlMongoLocal, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => {
    if(err) return console.log(`Error en conexión de base de datos ${err}`)
    console.log('Base de datos conectada!')

    let usuarioInstancia = new usuarioModel({
        nombre: 'Juan',
        edad: 26
    })
    /* usuarioInstancia.save( err => {
        if(err) return console.log(`error de escritura en DB ${err}`)
        console.log('Escritura OK!') */

        usuarioModel.find({}, (err,usuarios) => {
            if(err) return console.log(`error de lectura en DB ${err}`)
            console.log('Lectura OK!')
    
            usuarios.forEach(usuario => {
                console.log(usuario)
            })
        }).sort({_id:-1})
    
    //})


})