import express from "express"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import mongoose from "mongoose"
import kpiRoutes from "./routes/kpi.js"
import productRoutes from "./routes/product.js"
import transactionRoutes from "./routes/transaction.js"
import KPI from "./models/KPI.js"
// import Product from "./models/Product.js"
// import Transaction from "./models/Transaction.js"
// import { transactions } from "./data/data.js"

/* HTTP CONFIGURATIONS */
dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
  })
)
app.use(morgan("common"))
app.use(cors())

/* ROUTES */
app.use("/kpi", kpiRoutes)
app.use("/product", productRoutes)
app.use("/transaction", transactionRoutes)

/* MONGOOSE SETUP */
/* because dotenv is not working, I had to hardcode the MONGO_URL and PORT */
const PORT = 1337
const MONGO_URL =
  "mongodb+srv://user:1234@cluster0.cpx3dlx.mongodb.net/?retryWrites=true&w=majority"
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    // await mongoose.connection.db.dropDatabase()
    // KPI.updateOne({ _id: "60a1b1b0b9b1a8a0f8e1f1a1" }, { $set: { value: 100 } })
    // Product.insertMany(products)
    // Transaction.insertMany(transactions)
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
  })
  .catch((error) => console.log(`${error} did not connect`))
