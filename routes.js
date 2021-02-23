const homeController = require('./controllers/home.controller');

const Routes = (app) => {
 
    app.get('/', homeController.index);
    
}

module.exports = Routes