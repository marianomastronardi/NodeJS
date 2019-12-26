const PORT = process.env.PORT || 8080
/* 
require('http').createServer((req,res) => res.end(`${PORT+1}`)).listen(PORT+1)
require('http').createServer((req,res) => res.end(`${PORT+2}`)).listen(PORT+2)
require('http').createServer((req,res) => res.end(`${PORT+3}`)).listen(PORT+3)
require('http').createServer((req,res) => res.end(`${PORT+4}`)).listen(PORT+4)
require('http').createServer((req,res) => res.end(`${PORT+5}`)).listen(PORT+5)
require('http').createServer((req,res) => res.end(`${PORT+6}`)).listen(PORT+6)
 */

const http = require('http')

let contador = 0
const server = http.createServer((req,res) => {
    
    //console.log(req.url)
    if(req.url == '/') {
        contador++
        res.writeHead(200, {'content-type':'text/html'})
        res.write(
                `<h1 style="color:blue;">
                    Hola NodeJS! <span style="color: red;">${new Date().toLocaleString()}</span>
                </h1>
                <h2>
                    Visitas: ${contador}
                </h2>
            `)
        res.end(
            `
            <script>
                //alert("Hola!!!!")
            </script>
        `)
    }
})

server.listen(PORT, err => {
    if(err) return console.log(`Error en servidor ${err}`)
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})