//http://expressjs.com/es/guide/using-template-engines.html
const express = require('express');
const pug = require('pug');

const app = express();


app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', function (req, res) {
  res.render('home', 
    { title: 'Página Pug', message: 'Hola Juan',
      usuarios: [
        'Pedro',
        'María',
        'Pepe'
      ]
    }
  );
});

app.listen(3000, function(){
	console.log('up and running in port 3000');
});
