function greetings(msg , time){
    alert("hello all..." +msg  +  "now its" +time)
}
//greetings("Good morning...", "10 Am" )
//greetings("Good eve...", "4 pm" )
//greetings("Good night...", "8pm" )
//greetings()

function printname(){
  let myname=  prompt("enter your name")
alert("hey" +myname)
}


function addtwonumbers(){
    //string to number, parseint or parseFloat
    let firstnumber =parseFloat(prompt("enter first number"))
    let secondnumber =parseFloat(prompt ("enter second number"))
    
alert(  firstnumber+secondnumber)

}


function average(x,y,z){
    let average= ( (x+y+z)/3 )
      return average
}
let result= average(5,10,15)
console.log("result")






