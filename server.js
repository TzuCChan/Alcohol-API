import db from "./connection.js"
import router from "./mainrouter.js"
import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use("/", router)

db.on("connected", () => {
  console.clear()
  console.log("Connected to MongoDB!")
  app.listen(PORT, () => {
    process.env.NODE_ENV === "production"
      ? console.log(`Express server running in production on port ${PORT}\n\n`)
      : console.log(
          `Express server running in development on: http://localhost:${PORT}`
        )
  })
})