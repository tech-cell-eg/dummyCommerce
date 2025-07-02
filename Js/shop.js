let data;
async function getProducts(){
  let response=await fetch("https://dummyjson.com/products");
if(response.ok){
  data=await response.json();
   
  displayData();

}
}
getProducts();
function displayData(){
    let products='';
    let productList=data.products;
    
    for(let i=0;i<productList.length;i++){
       products+=`
        <div class="col-md-3">
                    
  <img src=${productList[i].thumbnail} class="card-img-top" style="width: 287px;height: 287px;" alt="${productList[i].title}">
  <div class="card-body text-center">
    <p class="card-text">${productList[i].title}</p>
    <p class="h4">Rs. ${productList[i].price}</p>
   
</div>
         </div>
       `

    }
    console.log(productList)
    document.getElementById("row").innerHTML=products;
}