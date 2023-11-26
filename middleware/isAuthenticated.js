import user from '../model/user.js';
import  Jwt  from 'jsonwebtoken';
export const isAuthenticated =async(req,res,next)=>{
   try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(404).json({ success: false, message: "login first" });
    }
    
    const decoded = Jwt.verify(token, process.env.JWT_SECRET);
  
  
    req.user = await user.findById(decoded._id);
    next();
   } catch (error) {
        res.status(404).json({success:false, message:'something went wrong'})
   }

}