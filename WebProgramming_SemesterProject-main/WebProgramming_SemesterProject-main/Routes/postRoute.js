import express from "express";
import { makingapost, getuserpost,displayalltimeline } from "../Controller/PostController.js";
const router= express.Router()
router.get('/', makingapost)
router.get('/:id', getuserpost)
router.get('/:id/allposts', displayalltimeline)
export default router;