
let jwtoken = (req, res,next)=>{
    token = req.get('Token');
    console.log(token);
    next();
} 