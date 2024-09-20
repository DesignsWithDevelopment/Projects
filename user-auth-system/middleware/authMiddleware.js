const jwt = require("jsonwebtoken");

module.exports = function (req,res,next){
    const token = req.headers.authorization;

    if(!token){
        res.status(401).json({message:'No token, Authorization Deined!'});
    }

    try{
        const decoded = jwt.verify(token,'suhas');
        req.user = decoded.user;
        next();
    }catch(error){
        res.status(401).json({messgae: 'Token is invalid'});
    }
}