import express from "express";
const  router= express.Router();
import {RegisterVeteran, vetLog} from '../Controller/AuthenticateCont.js'
//router.get('/', async(req, res)=>{res.send("Authenticate Route")})
// post: jab router ko bhejna ho
router.post('/register',RegisterVeteran)
router.post('/login',vetLog)
export default router;