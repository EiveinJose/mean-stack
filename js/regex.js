//let myregex=//
//let new RegExp()

function checkInput()
{
    //let regex=/[a-z]/  only alerts a
   //  let regex=/[a-z]{2,5}/g
   // let regex=/^(987)\d{7}$/g  //begins with 987
   //  let regex=/^(987|949)\d{7}$/g  //begins with 987 or 949
     let regex=/^\+91 (987|949)\d{7}$/g                  // use \ before using charactors like +, *,() in input. becoz it have meaning
    let uname= document.getElementById("username").value

     
   // alert(uname.match(regex))
    
    if(regex.test(uname)){
        alert("it's a valid mobile number")
    }else{
        alert("it's an invalid mobile number")
    }
}