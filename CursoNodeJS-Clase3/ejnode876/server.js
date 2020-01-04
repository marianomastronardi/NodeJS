const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const PORT = process.env.app_port || 8080

app.use(express.static(__dirname+'/public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use((req,res,next) => {
    console.log('METODO:',req.method)
    console.log('QUERY: ',req.query)
    console.log('BODY:  ',req.body)
    next()
})
app.use((req,res,next) => {
    console.log('FyH:',new Date().toLocaleString())
    console.log('------------------------')
    next()
})

/* app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/index.html' )
})
 */
app.get('/datos', (req,res) => {
    //console.log(req.method)
    //console.log(req.query)
    res.send('datos GET')
})

app.post('/datos',(req,res) => {
    //console.log(req.body)
    //res.send('datos POST')
    res.redirect('/')
})

app.put('/datos', (req,res) => {
    //console.log(req.query)
    //console.log(req.body)
    res.send('datos PUT')
})

app.delete('/datos', (req,res) => {
    //console.log(req.query)
    res.send('datos DELETE')
})

app.get('*', (req,res) => {
    res.sendFile(__dirname+'/public/error404.html')
})


app.listen(PORT, err => {
    if(err) return console.log(`Error en servidor: ${err}`)
    console.log(`Servidor Express escuchando en el puerto ${PORT}`)
})