 import mongoose from 'mongoose';

const namesSchema = mongoose.Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    createdOn: {type:Date, default:new Date()},
})


export default mongoose.model("Name", namesSchema,"names");

