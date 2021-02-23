

const create = (req, res, next) => {
    res.render('formulario')
}


const getForm = (req, res, next) => {

    const data = req.body;
    console.log(data)
    res.json(data)
}


module.exports = {
    create,
    getForm
}