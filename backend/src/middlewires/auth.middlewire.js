import jwt, { verify } from 'jsonwebtoken';
import User from '../models/user.model.js';
export async function isLogin(req, res, next) {
    const token = req.cookies;
    if (!token) {
        return res.status(400).json({message: 'unauthorised user'});
    }

    const varify = jwt.verify(token, JWT_SECRET);
    if(!verify) {
        return res.status(401).json({message: 'invalid token'});
    }
    const user = await User.findOne({_id: verify?._id});
    if (!user){
        return req.status(402).json({message: 'invalid token data, (user not found)'});
    }
    req.user = user;
    next();
}