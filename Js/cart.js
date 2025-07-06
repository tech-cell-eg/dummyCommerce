  
let cartList = JSON.parse(localStorage.getItem("cart")) || [];

 
let totalElem = document.getElementById("total");
let subtotalElem = document.getElementById("subtotal");

function displayCartItems() {
  let table = document.querySelector("table");
  let tableBody = table.querySelector("tbody");

 
  if (!tableBody) {
    tableBody = document.createElement("tbody");
    table.appendChild(tableBody);
  }

  
  tableBody.innerHTML = "";

  cartList.forEach((item, index) => {
    const row = document.createElement("tr");
   
    row.innerHTML = `
      <td colspan="2"> <img src="${item.image}" class="img-fluid mb-2  " style="width:100px" alt="${
    item.title
  }" />${item.name} 
            
                </td>
      <td>Rs.${item.price}</td>
      <td class="text-center">
        <div class="w-25 border border-black rounded-1">${item.quantity}</div>
      </td>
      <td>Rs.${item.price * item.quantity}</td>
      <td>
        <i class="fa-solid fa-trash text-warning" style="cursor:pointer;" onclick="deleteItem(${index})"></i>
      </td>
    `;

    tableBody.appendChild(row);
  });

  updateTotals();
}

function updateTotals() {
  const subtotal = cartList.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  subtotalElem.textContent = `Rs.${subtotal}`;
  totalElem.textContent = `Rs.${subtotal}`;
}

function deleteItem(index) {
  cartList.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartList));
  displayCartItems();
}


displayCartItems();
document.getElementById('check-out').addEventListener("click",function(){
  window.location.href =`checkout.html`
})
