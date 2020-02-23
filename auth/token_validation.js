const {verify} = require("jsonwebtoken");

module.exports = {
    checkToken: (req, res, next)=>{
        let token = req.get("authorization");
        if(token){
            token = token.slice(9);
            verify(token, "alvian321",(err, decoded)=>{
                if(err){
                    res.json({
                        success:0,
                        message:"invalid token"
                    });
                }else{
                    next();
                }
            });
        }else{
            return res.json({
                success:0,
                message:"access denied ! "
            });
        }
    }
}