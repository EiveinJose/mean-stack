let arr=[]
console.log(arr,typeof arr);
let arr_1=new Array()
console.log(arr_1,typeof arr_1);

let names=["Anna","Ammu","Rahul","Anu"]
console.log(names);
console.table(names);
console.log(names[2]);
names[2]="Don"
console.log(names)
console.log(names.length);

for(let i=0;i<names.length;i++)
console.log(names[i]);

console.log("***************");
for (let name of names){
    console.log(name);
}

console.log("***************");
for(let index in names ){
    console.log(index);
    console.log(names[index]);}

    names.push("Rose") //add in end
    console.log(names)

    names.unshift("Rachel") //add in starting
    console.log(names);
    names.pop()   //remove from end
    console.log(names);
    names.shift()            //remove from starting
    console.log(names); 
    names.push("Benny")
    names.push("Sam")
    names.push("Honey")
    console.log(names);
   // names.splice(2,3)
    console.log(names); //delete 3 elements from 2nd index onwords
    //names.splice(4)
    console.log(names); //delete all elements from 4th index onwords.
    names.splice(3,1,"Rini")
    console.log(names);

    console.log(names.indexOf("Rini"));
    console.log(names.includes("Anandu"));
    names.reverse()
    console.log(names);
    console.log(names.slice(3));
    console.log(names.slice(3,6));

    names.forEach((name)=>{
        console.log(name);

    })




let num_arr=[11,14,22,15,16,20]
let sq_num_arr=num_arr.map(x=>{
    return x**2
})
console.log(sq_num_arr);

let even=num_arr.filter(x=>{
    if(x%2==0){
        return x
    }
})
console.log(even);


let result=num_arr.reduce((x,y)=>{
    console.log("x",x);
    console.log("y",y);
          return x+y

})

console.log(result)

result=num_arr.reduceRight((x,y)=>{
    return x-y
})

console.log(result);