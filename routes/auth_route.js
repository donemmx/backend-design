const express = require('express');
const router = express.Router();
const signupmodelcopy = require('../models/SignupModels')
const bcrypt = require('bcrypt');


router.post('/signup', async (req, res)=>{
    
    const saltpassword =  await bcrypt.genSalt(10)
    const securepassword = await bcrypt.hash(req.body.password, saltpassword)

    const sigedupUser = new signupmodelcopy({
        fullName: req.body.fullName,
        email: req.body.email,
        password: securepassword 
    })

    sigedupUser.save().then(data =>{
        res.json(data);
    })
    .catch(err =>{
        res.json(err);
    }) 
})



module.exports = router;