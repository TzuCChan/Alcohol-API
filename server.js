import db from "./connection.js"
import router from "./mainrouter.js"
import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use("/", router)