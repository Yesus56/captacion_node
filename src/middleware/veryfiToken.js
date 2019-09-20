import jwt from 'jsonwebtoken';
let jwtoken = (req, res,next)=>{
  let token =  req.get('token');
  jwt.verify( token , process.env.PRIVATE, (err,decoded) => {
    if(err){
        return res.status(401).json({
            ok:false,
            err
        })
    }
    req.usuario = decoded
    console.log(req.usuario);
    next();
    })
}


export{
    jwtoken
}