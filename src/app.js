import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "500kb"}))
app.use(express.urlencoded({extended: true, limit: "500kb"}))
app.use(express.static("public"))
app.use(cookieParser())
// routes import 
// Temporary test - replace with your actual full path
import userRouter from './routes/user.route.js'


// routes declaration
app.use("/api/v1/users",userRouter)



// http://localhost:8000/users/login

export {app}