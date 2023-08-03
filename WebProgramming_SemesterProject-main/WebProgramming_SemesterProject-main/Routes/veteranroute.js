import express from "express";
import { getvet, updatingvet,followauser,updatehobby} from "../Controller/vetController.js";

const router= express.Router();
// we are using get coz we are just sending id jo keh part of the request's body nhi hai
// 
router.get('/:id',getvet)
router.put('/:id',updatingvet)
router.put('/:id/follow',followauser)
router.put('/updatehobby', updatehobby)
export default router;