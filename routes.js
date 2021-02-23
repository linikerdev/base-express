
const Routes = (app) => {

    app.get('/', (req, res, next) => {
        const option = {
            nome: 'Liniker'
        }

        res.render('home', option)
    })

}

module.exports = Routes