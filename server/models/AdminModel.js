const mongoose = require("mongoose")

const AdminInfoSchema = new mongoose.Schema({
    text1 : {
        type : String,
        default : ""
    },
    text2 : {
        type : String,
        default : ""
    },
    text3 : {
        type : String,
        default : ""
    },
    instagramName : {
        type : String,
        default : ""
    },
    instagramUrl : {
        type : String,
        default : ""
    },
    facebookName : {
        type : String,
        default : ""
    },
    facebookUrl : {
        type : String,
        default : ""
    },
    phoneNumber : {
        type : String,
        default : "+37491199777"
    },
    gmail : {
        type : String,
        default : ""
    },
    location : {
        type : String,
        default : "https://maps.app.goo.gl/LdjWZe4PiavKArFfA"
    },
})


module.exports = mongoose.model("adminns", AdminInfoSchema)