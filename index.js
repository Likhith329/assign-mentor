const dotenv=require('dotenv')
dotenv.config()

const express=require('express')
const app=express()
app.use(express.json())

const mongo=require('./connect')
mongo.connect()

const cors=require('cors')
app.use(cors())

const StudentRouter=require('./Router/StudentRouter')
const MentorRouter=require('./Router/MentorRouter')
app.use('/',(req,res)=>{
res.send("Welcome to the App")
})
app.use('/students',StudentRouter)
app.use('/mentors',MentorRouter)

app.listen(process.env.PORT)