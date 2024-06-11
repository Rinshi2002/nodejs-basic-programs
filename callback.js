//start one after another-synchronous
//start all process at the same time- asynchronous

var dt = new Date()
console.log("hello")
for(i=0;i<5;i++)
{
    console.log("hi")
}
var diff = new Date()-dt
console.log(diff)



//example for synchronous

function longtask(ms)
{
    dt=new Date()
    while(new Date()-dt<=ms)
    {
       
    }
}
console.log('started')
longtask(4000)
console.log('end')

console.log('started')
longtask(4000)
console.log('end')

console.log('started')
longtask(4000)
console.log('end')


//example for asynchronous

function longtask(ms)
{
    dt=new Date()
    while(new Date()-dt<=ms)
    {
       
    }
}

function showEnd()
{
console.log('end')
}

console.log('started')
setTimeOut(showEnd,2000)

console.log('started')
setTimeOut(showEnd,2000)

console.log('started')
setTimeOut(showEnd,2000)

