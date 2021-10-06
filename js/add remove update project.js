
let product_list=[]


function addProducts(names){
    product_list.push(names)
    console.log(product_list);
    
}

    

function removeProducts(names){
    if(product_list.includes(names)){
        product_list.splice(product_list.indexOf(names),1)
        console.log(product_list)
    }
    else{
        console.log("element not found");
    }

}



function updateProducts(names, newname){
    if(product_list.includes(names)){
        product_list.splice(product_list.indexOf(names),1,newname)
        console.log(product_list)
    }

}

addProducts("pen")
addProducts("pencil")
addProducts("eraser")
addProducts("book")
//removeProducts("eraser")

updateProducts("pen","marker")
