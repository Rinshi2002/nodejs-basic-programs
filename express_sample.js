const express=require('express')
const path =require('path')

const app=express()


//middleware,next must be contain,next is used for moving next 
app.use(function(res,res,next){
    console.log('start')
    next()
})



app.get('/signup',function(req,res,next){

    console.log("middle")
    res.sendFile(path.join(__dirname,'signup.html'))
    next()

})

app.use(function(res,res){
    console.log('end')
   
})


app.post('/signup',function(req,res){

    res.send("account created")

})


app.get('/about',function(res,req){
    res.send('about')

})



app.listen(3000,function(){
    console.log('server started')
})