//imports
const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes');


//configs
const port = 3000;
app.set('view engine', 'ejs');



// middlewares
app.use(express.static(path.join(__dirname, '/public')))


//router
routes(app);


// executar run projeto
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})