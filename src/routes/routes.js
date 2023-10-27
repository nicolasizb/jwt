const { Router } = require('express')
const jwt = require('jsonwebtoken')
const { greeting, protection, authJWT } = require('../../middleware/middleware.js')

const router = Router()

router.get('/get-users', authJWT, (req, res) => {
    res.status(200).json([
        {
            id: 1,
            name: "Rafa"
        },
        {
            id: 2,
            name: "Andres"
        },
    ])
})

// Generator TOKEN
router.post('/login', protection ,(req, res) => {
    const email = req.body.email
    try {
        let objJWT = {
            email
        }

        jwt.sign(objJWT, 'nico1234', (err, token) => {
            if(err) {
                res.status(500).json({msg: err})
                return 
            } else {
                res.status(200).json({msg: "Token created", token: token})
            }
        })

    } catch(error) {
        res.status(500).json(error)
    }
})

module.exports = router