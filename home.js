/****get all data list  */
let productList = [];

fetch('https://dummyjson.com/products/category/furniture')
  .then(res => res.json())
  .then(data => {
    productList = data.products;
    console.log(productList); // Array of products
 

});