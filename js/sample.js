console.log(stmt);

let k=500;  //global variable  
function demo(){

     let k=100  //local .....if let is removed outside k will show 100
    let x=50  //local
    console.log(k)
    console.log(x)

}

demo()
console.log(k); //error bcoz k is declired inside function(if global variable is not declared)



for(var i=1; i<5;i++){
    console.log(i);
}
console.log(i);

var stmt = "hhhhh"; //console in line 1( output is undefined...this is because hoisting...(only var)...declerations will move to top....if let, it will show error)


//function expression ,anonymus
let greetings=function(){
    console.log("gai all, good morning")

}
console.log(greetings);
//greetings
greeetings()
