const mongo=require('../connect')

module.exports.createStudent=async(req,res)=>{
    try {
        const createdresponse=await mongo.selectedDb.collection('Students').insertOne({...req.body.student})
        res.send(createdresponse)
    } catch (error) {
        console.log(error)
    }
}

module.exports.getStudent=async(req,res)=>{
    try {
        const createdresponse=await mongo.selectedDb.collection('Students').find({...req.body}).toArray()
        res.send(createdresponse)
    } catch (error) {
        console.log(error)
    }
}

module.exports.assignaMentor=async(req,res)=>{
    try {
        const createdresponse=await mongo.selectedDb.collection('Students').updateOne({name:req.body.name},{$set:{mentor:req.body.mentor}})
        res.send(createdresponse)
    } catch (error) {
        console.log(error)
    }
}

module.exports.deleteStudent=async(req,res)=>{
    try {
        const response=await mongo.selectedDb.collection('Students').deleteOne({name:req.body.name})
        res.send(response)
    } catch (error) {
        console.log(error)
    }
}


