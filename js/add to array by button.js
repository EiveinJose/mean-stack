let mytask = []

function addtoArray() 
{
    let task = document.getElementById("activity").value;
    mytask.unshift(task)
    console.log(mytask);    //output in console
    printTodo();           //to print in browser

}

function printTodo() 
{
    let data = ""
    for (let task of mytask)
    {
        data += `<li>${task}</li>  <button onclick='remove(${mytask.indexOf(task)})'>Remove</button>`
    }
    document.getElementById("tasklist").innerHTML = data
}


function remove(index) 
{
    mytask.splice(index, 1)
    console.log(mytask);
    printTodo()

}




















