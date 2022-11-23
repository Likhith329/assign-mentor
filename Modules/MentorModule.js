const mongo=require('../connect')

module.exports.createMentor=async(req,res)=>{
    try {
        const createdresponse=await mongo.selectedDb.collection('Mentors').insertOne({...req.body.mentor})
        res.send(createdresponse)
    } catch (error) {
        console.log(error)
    }
}

module.exports.getMentor=async(req,res)=>{
    try {
        const response=await mongo.selectedDb.collection('Mentors').find({}).toArray()
        res.send(response)
    } catch (error) {
        console.log(error)
    }
}

module.exports.assignaStudent=async(req,res)=>{
    try {
        const response=await mongo.selectedDb.collection('Mentors').updateOne({name:req.body.name},{$set:{students:req.body.students}})
        res.send(response)
    } catch (error) {
        console.log(error)
    }
}

module.exports.deleteMentor=async(req,res)=>{
    try {
        const response=await mongo.selectedDb.collection('Mentors').deleteOne({name:req.body.name})
        res.send(response)
    } catch (error) {
        console.log(error)
    }
}

