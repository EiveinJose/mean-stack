//nested function

let data = 100

function outer(){
    let k = 50
    console.log("data",data);
    console.log("inside outer");
    function inner(){
        console.log("data",data);
        console.log("inside inner k=",k);
        console.log("inside inner")
    }
    inner()

}
outer()


function first(){
    console.log("inside first function");
    return function(){     //returning function
        console.log("inside the second function");
    }
}
let f=first()
f()

//argument function or call back function

function calculate(f,x,y)
{
    
    console.log(f(x,y));
}
let add=(x,y)=>{
    return x+y
}
let sub=(x,y)=>{
    return x-y
}
calculate(add,1,2)
calculate(sub,3,1)