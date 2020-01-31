const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(express.static(__dirname + '/views'));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});
*/

function getResponsePage(nombre) {

    return  '<body style="background-color:blue;">' +
                '<h1 style="color:white;">Hola '+nombre+'</h1>'+
                '<h2 style="color:white;">'+new Date()+'</h2>'+
            '</body>';
}


function getResponsePageTS(nombre) {

    return `
        <body style="background-color:red;">
            <h1 style="color:white;">Hola ${nombre}</h1>
            <h2 style="color:white;">${new Date()}</h2>
        </body>
    `;
}


app.post('/datos', function (req, res) {
	console.log(req.body);
	let nombre = req.body.nombre;
    //res.sendFile(__dirname + '/views/index.html');
    res.send(getResponsePageTS(nombre));
});

app.listen(8080, function(err) {
	if(err) return console.log(err);
	console.log('Servidor Listen Port 8080');
});
