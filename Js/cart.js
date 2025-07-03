// 1. اكتب بيانات الـ cart الأول قبل ما تقرأها
localStorage.setItem(
  "cartList",
  JSON.stringify([
    { name: "Sofa", price: 5000, quantity: 1 },
    { name: "Table", price: 3000, quantity: 2 },
  ])
);

// 2. اقرأ بيانات السلة من localStorage بعد الكتابة
let cartList = JSON.parse(localStorage.getItem("cartList")) || [];

// 3. عناصر المجموع
let totalElem = document.getElementById("total");
let subtotalElem = document.getElementById("subtotal");

function displayCartItems() {
  let table = document.querySelector("table");
  let tableBody = table.querySelector("tbody");

  // لو مفيش tbody، أنشئه
  if (!tableBody) {
    tableBody = document.createElement("tbody");
    table.appendChild(tableBody);
  }

  // نظف المحتوى قبل العرض
  tableBody.innerHTML = "";

  cartList.forEach((item, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td colspan="2">${item.name}</td>
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
  localStorage.setItem("cartList", JSON.stringify(cartList));
  displayCartItems();
}

// أول مرة تعرض العناصر
displayCartItems();
