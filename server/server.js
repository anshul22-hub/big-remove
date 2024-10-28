import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/db.js'


//app config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()



//Intialise Middleware
app.use(express.json())
app.use(cors())


//api routes
app.get('/',(req,res)=> res.send("API working"))

app.listen(PORT, ()=> console.log("Server runing on port "+PORT))



