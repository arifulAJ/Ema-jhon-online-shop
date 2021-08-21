function addPrice(product, value) {
    const productsValue = document.getElementById(product + '-value', value).innerText;

    if (value == 0) {
        const value = productsValue.innerText = 0;
        const agin = productsValue.innerText = value;
        return agin;
    } else if (value == 100) {
        const value = productsValue.innerText = 100;
        const agin = productsValue.innerText = value;
        return agin;

    }
     else if (value == 180) {
        const value = productsValue.innerText = 180;
        const agin = productsValue.innerText = value;
        return agin;

    }
     else if (value == 20) {
        const value = productsValue.innerText = 20;
        const agin = productsValue.innerText = value;
        return agin;

    }
}
//add total value
function inputAdd(product){

    const productInput=document.getElementById(product+'-value');
    const productText=parseFloat(productInput.innerText) ;
    console.log(productText);
    return productText;
}
 function getTotalValue(){
     const memoryValue=inputAdd('memory');
     const StorageValue=inputAdd('storage');
     const deliveryValue=inputAdd('charge');
     const newValue=memoryValue+StorageValue+deliveryValue+1299;

     document.getElementById('totalWithAdd').innerText=newValue;
   const discount=  document.getElementById('discount').innerText=newValue;
   
     return newValue;
 }
// add value memory 
function getValue8GBMemory() {

    const addMemoryValue = addPrice('memory', 0);
    const memoryValue = document.getElementById('memory-value').innerText = addMemoryValue;
    getTotalValue();

}
   

function getValue16GBMemory() {
    const addMemoryValue = addPrice('memory', 180);

    const memoryValue = document.getElementById('memory-value').innerText = addMemoryValue;
    getTotalValue();
}

 
// add value storage
function getValue256GBStorage(){
 const addStorageValue=   addPrice('storage',0);
 const StorageValue=document.getElementById('storage-value').innerText=addStorageValue;
 getTotalValue();

}
function getValue512GBStorage(){
 const addStorageValue=   addPrice('storage',100);
 const StorageValue=document.getElementById('storage-value').innerText=addStorageValue;

 getTotalValue();
}
function getValue1TBStorage(){
 const addStorageValue=   addPrice('storage',180);
 const StorageValue=document.getElementById('storage-value').innerText=addStorageValue;


}
//delivery charge 
function deliveryFree(){
const addDeliveryValue=addPrice('charge',0);
const deliveryValue=document.getElementById('charge-value').innerText=addDeliveryValue;
getTotalValue();

}
function deliveryCharge(){
    const addDeliveryValue=addPrice('charge',20);
const deliveryValue=document.getElementById('charge-value').innerText=addDeliveryValue;
getTotalValue();

}
function deliveryCharge(){
    const addDeliveryValue=addPrice('charge',20);
const deliveryValue=document.getElementById('charge-value').innerText=addDeliveryValue;
getTotalValue();

}



//promo code
function promoButton(){
   const inputName=document.getElementById('input-promo').value;
   
  

   if(inputName=="stevekaku"){
    const discount=getTotalValue()*20/100;
    const afterDiscount=getTotalValue()-discount;

       document.getElementById('discount').innerText=afterDiscount;
    
   }
   else{
       window.alert("it's not a valid promo code")
   }
}
 
   
