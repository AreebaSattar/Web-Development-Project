import axios from "axios"
import { applyMiddleware } from "redux"
const theapi= axios.create({baseURL:"http://localhost:5000"})
export const loggingin = (FormData)=>theapi.post('/authentication/login', FormData)
export const signingup = (FormData)=>theapi.post('/authentication/signup', FormData)