const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const PORT = 8080

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req,res) => {
    //res.send('Hola soy Express!!!')
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/datos/:nombre?/:apellido?/:edad?', (req,res) => {
    //let datos = req.query
    let datos = req.params
    
    //res.send('soy la ruta datos GET')
    res.send(datos)
})

app.post('/datos', (req,res) => {
    let datos = req.body
    res.send(datos)
})

app.listen(PORT, err => {
    if(err) return console.log(`Error en servidor: ${err}`)
    console.log(`Servidor Express escuchando en el puerto ${PORT}`)
})