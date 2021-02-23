//imports
const path = require('path');
const express = require('express');
const routes = require('./routes');
const { verifica } = require('./middlewares/');


//configs
const app = express();
const port = 3000;
app.set('view engine', 'ejs');


// middlewares

// quando vem do navegador
app.use(express.urlencoded())
// quando vem de uma requisicao json
app.use(express.json())
app.use(express.static(path.join(__dirname, '/public')))
// app.use();

//router
routes(app);


// executar run projeto
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})