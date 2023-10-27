const jwt = require('jsonwebtoken')

function greeting(req, res, next) {
    let name = req.params.name
    console.log(name)
    if(name !== "Nicolas") {
        res.status(403).send("Forbidden")
        return
    }
    next()
}

function protection(req, res, next) {
    let email = req.body.email
    let password = req.body.password

    if(email !== "nicolas@gmail.com" || password !== 'nico1234') {
        res.status(403).send("Forbidden")
        return
    }
    next()
}

function authJWT(req, res, next) {
    const token = req.headers.authorization
    
    if(token == null) {
        res.status(403).send("Forbidden")
        return
    }
    
    jwt.verify(token, 'nico1234', (err, data) => {
        if(err) {
            res.status(403).send("Forbidden")
            return
        }
        console.log(data)

        next()
    })
}

module.exports = { greeting, protection, authJWT }