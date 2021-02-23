const homeModels = require('../models/home')

const homeIndex = (req, res, next) => {
    const profile = homeModels.profile();

    console.log(profile)
    const option = {
        profile
    }

    res.render('home', option);
}


module.exports = {
    index: homeIndex
}