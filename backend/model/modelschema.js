const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
   
    firstName: {
      type:String,
      require:true 
   },
   lastName:{
       type: String,
       require:true
   },
   role:{
       type:String,
       require:true
   },
   email:{
   type:String,
   require:true,
   unique:true,
   },
   mobile:{
       type:String,
       require:true,
       unique:true,
   },
links:{
    require:true,
}

})


const EntityModel = mongoose.model('EntityModel', EmployeeSchema )


module.exports= EntityModel;