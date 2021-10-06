//literals
let s="hello"
console.log(s,typeof s)

//by functions
let s1=String("hello")
console.log(s1,typeof s1);
let i=123
console.log(i,typeof i)
let i1=Number(123)
console.log(i1,typeof i1);
let k=i.toString()
console.log(typeof k);
let p=i1.toString()
console.log(typeof p);


//boolean
let c= true
console.log(typeof c)
console.log(c.toString());
let d=c.toString()
console.log(typeof d);

//pareseInt(), parseFloat()
let str = "455.67"
console.log(typeof str)
console.log( parseFloat(str))
console.log(typeof parseFloat(str))

//immutable=>not modifiable
let word1="hello"
let word2="world"
word1+word2
console.log(word1);
let mystr =new String("hello")
console.log(mystr)
console.log(typeof mystr)