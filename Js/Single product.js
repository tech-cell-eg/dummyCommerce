const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
console.log(productId)

fetch(`https://dummyjson.com/products/${productId}`)
  .then((res) => res.json())
  .then((product) => {
    document.getElementById("productTitle").innerText = product.title;
    document.getElementById(
      "productPrice"
    ).innerText = `Rs. ${product.price},000.00`;
    document.getElementById("productDescription").innerText =
      product.description;
    document.getElementById("mainImage").src = product.thumbnail;
    document.getElementById("productSKU").innerText = product.id;
    document.getElementById("productCategory").innerText = product.category;

    const thumbnails = document.getElementById("thumbnailImages");
    thumbnails.innerHTML = product.images
      .slice(0, 4)
      .map(
        (img) => `
        <img src="${img}" onclick="document.getElementById('mainImage').src='${img}'" width="60" class="img-thumbnail" />
      `
      )
      .join("");
  });

function changeQuantity(delta) {
  const input = document.getElementById("quantityInput");
  let value = parseInt(input.value);
  if (!isNaN(value)) {
    value += delta;
    if (value < 1) value = 1;
    input.value = value;
  }
}

//
const tabs = {
  desc: `
      <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
      <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering...</p>
    `,
  info: `
      <p>Material: High-quality fabric and wood</p>
      <p>Dimensions: 250 x 80 x 75 cm</p>
      <p>Weight: 32 kg</p>
    `,
  reviews: `
      <p>⭐️⭐️⭐️⭐️⭐️ - Very comfortable and stylish!</p>
      <p>⭐️⭐️⭐️⭐️ - Good quality but delivery was late.</p>
      <p>⭐️⭐️⭐️⭐️⭐️ - Perfect for my living room. Highly recommend.</p>
    `,
};

function showTab(tab, e) {
  document.getElementById("tab-content").innerHTML = tabs[tab];

  document.querySelectorAll(".tab-button").forEach((btn) => {
    btn.classList.remove("active");
  });

  e.target.classList.add("active");
}

// Show default tab
window.onload = () => showTab("desc");

//
const products = [
  {
    title: "Trenton modular sofa_3",
    price: 25000,
    image: "https://i.imgur.com/4YQ0SeL.png",
  },
  {
    title: "Granite dining table with dining chair",
    price: 25000,
    image: "https://i.imgur.com/VK9KsEo.png",
  },
  {
    title: "Outdoor bar table and stool",
    price: 25000,
    image: "https://i.imgur.com/HrXR2PE.png",
  },
  {
    title: "Plain console with teak mirror",
    price: 25000,
    image: "https://i.imgur.com/lRYRZsv.png",
  },
];
const container = document.getElementById("product-list");

//
products.forEach((product) => {
  container.innerHTML += `
    <div class="col-md-3 mb-4">
      <div class="product-card">
        <img src="${product.image}" class="img-fluid mb-2" alt="${
    product.title
  }" />
        <h6>${product.title}</h6>
        <p class="price">Rs. ${product.price.toLocaleString("en-IN")}.00</p>
      </div>
    </div>
  `;
});
//
document.querySelector(".btn.btn-dark").addEventListener("click", () => {
  const quantity = parseInt(document.getElementById("quantityInput").value) || 1;
  
  fetch(`https://dummyjson.com/products/${productId}`)
    .then((res) => res.json())
    .then((product) => {
      // 1. Get existing cart or initialize empty array
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      
      // 2. Check if product already exists in cart
      const existingItem = cart.find(item => item.id === product.id);
      
      if (existingItem) {
        // 3. Update quantity if item exists
        existingItem.quantity += quantity;
      } else {
        // 4. Add new item if not in cart
        cart.push({
          id: product.id,
          name: product.title,
          price: product.price,
          quantity: quantity,
          image: product.thumbnail // Optional: for displaying in cart
        });
      }
      
      // 5. Save back to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
      
      // 6. Redirect to cart page
      window.location.href = "cart.html";
    });
});
