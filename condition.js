var read=require('readline-sync')

var value=read.question('enter a number')

console.log(value)

var a=10
var b=20
if(a<b)
{
    console.log("larger is "+b)
}
else
{
    console.log("smaller is"+a)
}