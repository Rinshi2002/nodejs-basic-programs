//server creation in nodejs

var http = require('http')
var fs=require('fs')
var url = require('url')

http.createServer(function (req,res) {


    var q = url.parse(req.url,true)//true is used forgetting input in object model
    console.log(q.pathname)


    if(q.pathname==='/')
    {

    
        fs.readFile('samplehtml.html',function(err,data){

        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()

    })

    }
    else if(q.pathname==='/signup')
    {
        fs.readFile('signup.html',function(err,data){
          
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write(data)
        res.end()

        })

    }

    else if(q.pathname==='/signupaction')
    {

        console.log(q.query.name)


        res.writeHead(404,{'Content-Type':'text/html'})
        res.write('<h1>'+q.query.name+'</h1>')
        res.end()

    }

    else{

        res.writeHead(404,{'Content-Type':'text/html'})
        res.write('error')
        res.end()

    }

}).listen(7000,function()//this function is used to understand srver is running
    {
    console.log('running')
    })












//
//function  server(req,res) {
//    res.write('rinshi')
//    res.end
//}
