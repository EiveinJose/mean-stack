let obj= new String("javascript")
console.log(obj);
obj.toUpperCase()   //no change because string in immutable
let s=obj.toUpperCase()// move to other variable
console.log(obj)
console.log(s)
console.log(obj.toUpperCase())
let word="python"
console.log(s.toUpperCase())
console.log(obj.valueOf())
console.log(obj.length)
//start index is 2 and total 6 charactors
console.log(obj.substr(2,6));
//2 is starting point and end is  6
console.log(obj.substring(2,6));
console.log(obj.indexOf("a"));
console.log(obj.lastIndexOf("a"));
console.log(obj.indexOf("a",2));
console.log(obj.charAt(3));
console.log(obj.charAt(8));
console.log(obj.startsWith("java"))
console.log(obj.endsWith("java"))

let data=" hi hello hw r u "
console.log(data);
console.log(data.trim());// remove space
console.log(data.split(" "))
console.log(data.split(","))//array of strings.1...


