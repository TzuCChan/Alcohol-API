import db from "./connection.js"
import Cocktail from "./cocktails/model/cocktailmodel.js"
import cocktails from "./seedcocktails.json" assert { type: "json" }

const insertData = async () => {
  await db.dropDatabase()

  await Cocktail.insertMany(cocktails.drinks[0])

  db.close()
}