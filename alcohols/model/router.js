import { Router } from 'express'
import * as controllers from "./controller.js"

const router = Router()
router.get("/cocktails", controllers.getCocktails)
router.get("/cocktails/:id", controllers.getCocktail)
router.get("/cocktails/:name", controllers.getCocktailByName)
router.get("/cocktails/:glass", controllers.getCocktailsByGlass)

export default router