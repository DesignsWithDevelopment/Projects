const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Register a new user
router.post('/register', async (req,res)=>{
    const { email, password } = req.body;
    
    try{
        let user = await User.findOne({ email });
        if(user){
            return res.status(400).json({message: 'User already exists'});
        }

        user = await User.create({ email, password });

        const payload = user._id;
        const token = jwt.sign(payload, 'suhas');

        res.json({token});

    }catch(error){
        console.error(error.message);
        res.status(500).send('server error');
    }
});

//Login a user
router.post("/login", async (req,res)=>{
    const { email, password } = req.body;

    try{
        let user = await findOne({email});

        if(!user){
            return res.status(400).json({message: 'Invalid Credentials'});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({message: 'Invalid Credentials'});
        }

        const payload = user._id;
        const token = jwt.sign(payload,'suhas');

        res.json({token});
    }catch(error){
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;

