import * as fs from 'fs'

let url = 'https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php'
let parseResponse = response => response.json()
let writeJsonToFile = json => fs.promises.writeFile('./seedcocktails.json', JSON.stringify(json))
let handleError = error => console.error(error)