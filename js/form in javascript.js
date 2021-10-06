function validate(){
    let username= document.getElementById("uname")
    let pasword=document.getElementById("pswrd")
    let number=document.getElementById("mobnmbr")

    if(username.value===""){
        alert("enter username")
        username.focus()            // highlights the field
        return false
    }

    if(pasword.value===""){
        alert("enter pasword")
        pasword.focus()
        return false
    } 

    if(number.value===""){
        alert("enter mobile number")
        number.focus()
        return false
    }

    //if(isNaN(number.value)){             //isNaN ---  is not a number
        //alert("invalid mobile number")
        //mobile.focus()
        //return false
        
    //}

    let regex=/\+91\s\d{10}/g
    if(!(regex.test(number.value))){
        alert("enter a valid mobile number like +91 0000000000 ")
        number.focus()
        return false
    }

    
    if(true){
        alert("success")
    }
}
