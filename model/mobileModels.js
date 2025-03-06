import mongoose from "mongoose";

export const mobileModel = mongoose.model('mobile',{
    title:{type: String},
    price : {type : Number},
    dic : {type : String},
    img : {type : String},
    reting : {type : Number},
    color : {type : String},
    ram : {type : Number},
    rom : {type : Number},
})
