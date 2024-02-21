import { Router } from 'express'
import * as controllers from "./controller.js"

const router = Router()
router.get("/cocktails", controllers.getCocktails)
router.get("/cocktails/:id", controllers.getCocktail)

export default router