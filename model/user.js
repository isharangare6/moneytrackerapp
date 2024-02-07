const express=require('express')
const mongoose=require('mongoose')

const userData=new mongoose.Schema({
    collegefee:{
        type:String,

    },
    rent:{
        type:String
    },
    transport:{
        type:String
    },
    food:{
        type:String
    },
    shopping:{
        type:String
    },
    cooldrinks:{
        type:String
    },
    rent:{
        type:String
    },




})

const User = mongoose.model('User',userData)
module.exports=User