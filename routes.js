const homeController = require('./controllers/home.controller');
const formController = require('./controllers/form.controller');
const { verifica } = require('./middlewares')

const Routes = (app) => {

    app.get('/', homeController.index);

    app.get('/formulario', formController.create);

    app.post('/formulario', [verifica], formController.getForm);

}

module.exports = Routes