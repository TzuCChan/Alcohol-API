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

export const getCocktail = async (req, res) => {
  try {
    const { id } = req.params
    const cocktails = await Cocktail.findById(id)

    if (cocktails) {
      return res.json(cocktails)
    }

    res.status(400).json({ message: "Cocktail not found!" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}