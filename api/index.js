import express from "express"
import tipsRouters from "./routes/tips.js"
import userRoutes from "./routes/user.js"

const app = express()

app.use(express.json())
app.use("api/tips", tipsRoutes)
app.use("api/users", userRoutes)

app.listen(3000, ()=>{
    console.log("Connected!")
})