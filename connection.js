import mongoose from "mongoose"
const DATABASE_NAME = "cocktailAPI"

let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true }

const MONGODB_URI =
  process.env.PROD_MONGODB || `mongodb://127.0.0.1:27017/${DATABASE_NAME}`

mongoose.set("debug", true)

mongoose.set("returnOriginal", false)

export default mongoose.connection