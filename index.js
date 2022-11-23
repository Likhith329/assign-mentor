const dotenv=require('dotenv')
dotenv.config()

const mongo=require('./connect')
mongo.connect()

const cors=require('cors')

const express=require('express')
const app=express()
app.use(express.json())

app.use(cors())

const StudentRouter=require('./Router/StudentRouter')
const MentorRouter=require('./Router/MentorRouter')

app.use('/students',StudentRouter)
app.use('/mentors',MentorRouter)

app.listen(process.env.PORT)