import mongoose from "mongoose"
const DATABASE_NAME = "cocktailAPI"

let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true }

export default mongoose.connection