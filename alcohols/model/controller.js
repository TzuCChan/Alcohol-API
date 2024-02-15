import Cocktail from "./cocktailmodel.js"

export const getCocktails = async (req, res) => {
  try {
    const cocktails = await Cocktail.find()
    res.json(cocktails)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}