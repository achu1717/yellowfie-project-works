const express = require('express');
const bodyParser = require('body-parser');
// const functions = require('firebase-functions');

const firebase= require('firebase');

  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  const HttpStatus = require('http-status');
  const { to, ReE, ReS} = require('../services/util.service');
const httpStatus = require('http-status');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/get',(req,res)=>{
    ReS(res,{message:"welcome team 3"},HttpStatus.OK)
})
app.post('/register', async(req,res)=>{
    const body=req.body;
    var regUser={
        email:body.email,
        password:body.password,
    };
    let data,err;
    [err,data]=await to(firebase.auth().createUserWithEmailAndPassword(regUser.email,regUser.password));
    if(err){
        return ReE(res,err,HttpStatus.INTERNAL_SERVER_ERROR);
    }
    if(!data){
        return ReE(res,{message:"No data available"},HttpStatus.BAD_REQUEST);
    }
    if(data){
        return ReS(res,{message:"Registeration Successfull"},HttpStatus.OK);
    }
})
//login
app.post('/login',async (req,res)=>{
    let userData,err;
    const user={
        email:req.body.email,
        password:req.body.password,
    };
    [err,userData]= await to(firebase.auth().signInWithEmailAndPassword(user.email,user.password));
    if(err){
        return ReE(res,err,HttpStatus.INTERNAL_SERVER_ERROR)
    }
    if(!userData){
        return ReE(res,{message:"Please enter a valid email and password"},HttpStatus.BAD_REQUEST)
    }
    let getToken;
    [err,getToken]= await to(userData.user.getIdToken());
    if(err){
        return ReE(res,err,HttpStatus.INTERNAL_SERVER_ERROR)
    }
    if(!getToken){
        return ReE(res,{message:"unable to generate token"},HttpStatus.BAD_REQUEST)
    }
    if(getToken){
        return ReS(res,{message:"Login Sucessfull",token:getToken},HttpStatus.OK)
    }
})

exports.api=functions.https.onRequest(app)