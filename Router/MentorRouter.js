const express=require('express')
const router=express.Router()

const MentorModule=require('../Modules/MentorModule')

router.post('/create',MentorModule.createMentor)
router.get('/get',MentorModule.getMentor)
router.put('/assignastudent',MentorModule.assignaStudent)
router.delete('/delete',MentorModule.deleteMentor)


module.exports=router;