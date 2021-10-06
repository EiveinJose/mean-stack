function addnumbers(){
    let a=parseFloat(document.getElementById("firstdigit").value)
    let b=parseFloat(document.getElementById("seconddigit").value)
    let c=a+b;
    document.getElementById("result").value=c
}


function changeStyle(){
    document.getElementById("mypara").style.color="green"
    document.getElementById("mypara").style.fontSize="50px"
}

function styleChange(){
    document.getElementById("mypara").style.color="pink"
    document.getElementById("mypara").style.fontSize="30px"
    document.getElementById("mypara").style.fontFamily="monospace"
    document.getElementById("mypara").style.textAlign="center"
}

var add=function(x,y){    //anonymys function (no function name)
    return x+y
}
console.log(add);
add(1,2);


//arrow or lamda function

var demo=()=>{
    console.log("this is a demo function");
    console.log("this is an arrow function")
}
demo()