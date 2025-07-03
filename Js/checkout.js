const product = JSON.parse(localStorage.getItem("cartProduct"));

if (product) {
  document.getElementById("productName").innerText = product.title + " x 1";
  document.getElementById(
    "productPrice"
  ).innerText = `Rs. ${product.price},000.00`;
  document.getElementById(
    "productSubtotal"
  ).innerText = `Rs. ${product.price},000.00`;
  document.getElementById(
    "productTotal"
  ).innerText = `Rs. ${product.price},000.00`;
}
