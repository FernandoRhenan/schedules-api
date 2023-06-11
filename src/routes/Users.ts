import { Router } from 'express'
import { Register_user } from '../controllers/User_controller'
const routes = Router()

routes.post('/register')

export default routes