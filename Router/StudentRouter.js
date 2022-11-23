const express=require('express')
const router=express.Router()

const StudentModule=require('../Modules/StudentModule')

router.post('/create',StudentModule.createStudent)
router.get('/get',StudentModule.getStudent)
router.put('/assignamentor',StudentModule.assignaMentor)
router.delete('/delete',StudentModule.deleteStudent)


module.exports=router;