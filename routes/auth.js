const express = require('express')
const router = express.Router();

//@route    GET api/auth
//@desc     get loged in user
//@access   Private
router.get('/', (req, res) => {
    res.send('Get logged in user')
})

//@route    POST api/auth
//@desc     auth user and get token
//@access   Public
router.post('/', (req, res) => {
    res.send('log in user')
})

module.exports = router;