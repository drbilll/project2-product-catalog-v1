// Create an array to hold the inventory
let allProduct = [];
let newItem = 0;


let prdForm = document.querySelector("#prdForm");
var displayElement = document.querySelector("#display");
let webIO = function(e){
    e.preventDefault();

    let prdName = document.querySelector("#prdName");
    let prdModel = document.querySelector("#prdModel");
    let prdCost = document.querySelector("#prdCost");
    let prdQuantity = document.querySelector("#prdName");
    let prdType = document.querySelector("#prdType");

    let singleProduct = {
        prdName: prdName.value,
        prdModel: prdModel.value,
        prdCost: prdCost.value,
        prdQuantity: prdQuantity.value,
        prdType: prdType.value,
    };

    allProduct.push(singleProduct);
    displayoutput(allProduct); // calling function to display
 
};

function displayoutput(allProduct){
    let result = " ";
    for(let element of allProduct){
        result += `<br>Product Name: ${element['prdName']}<br>Prodcut Model: ${element['prdModel']}<br>Product Cost $${element['prdCost']}<br>Product Quantity: ${element['prdQuantity']}<br>Product Type: ${element['prdType']}<br>`;
    }
    // Set the innerHTML of the element with the data
    displayElement.innerHTML = result;
}

prdForm.addEventListener('submit', webIO);