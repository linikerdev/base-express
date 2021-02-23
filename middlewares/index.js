

const verifica = (req, res, next) => {
    if (1 + 1 !== 3) {
        res.json({
            error: "Tem algo errado"
        })
    }

    next();
}


module.exports = {
    verifica
}