import {Router} from 'express';
import { sample_users } from '../data';
import jwt from 'jsonwebtoken';

const router = Router();

router.post("/login",(req,res) =>{
    const {email,password} = req.body; //destructuring assignment
    const user = sample_users
    .find(user => user.email === email && user.password === password );

    if(user){
        res.send(generateTokenResponse(user));
    }else{
        res.status(400).send("User name or password is not valid!");
    }
})

const generateTokenResponse = (user:any) =>{
    const token =jwt.sign({
        email:user.email,isAdmin:user.isAdmin
    },"SomeRandomText",{
        expiresIn:"1d"
    });
    user.token = token;
    return user;
}

export default router;