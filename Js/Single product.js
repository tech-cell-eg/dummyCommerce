// 1. Get Product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// 2. Fetch and display product details
fetch(`https://dummyjson.com/products/${productId}`)
  .then((res) => res.json())
  .then((product) => {
    // Update main product details
    document.getElementById("productTitle").innerText = product.title;
    document.getElementById(
      "productPrice"
    ).innerText = `Rs. ${product.price.toLocaleString("en-IN")}.00`;
    document.getElementById("productDescription").innerText =
      product.description;
    document.getElementById("mainImage").src = product.thumbnail;
    document.getElementById("productSKU").innerText = `SKU: ${product.id}`;
    document.getElementById(
      "productCategory"
    ).innerText = `Category: ${product.category}`;

    // Display thumbnails
    const thumbnails = document.getElementById("thumbnailImages");
    thumbnails.innerHTML = product.images
      .map(
        (img) =>
          `<img src="${img}" onclick="changeMainImage('${img}')" width="60" class="img-thumbnail" />`
      )
      .join("");

    // Fetch related products from same category
    fetchRelatedProducts(product.category);
  })
  .catch((err) => {
    console.error("Error fetching product:", err);
    alert("Failed to load product details. Please try again later.");
  });

// 3. Fetch related products from API
function fetchRelatedProducts(category) {
  fetch(`https://dummyjson.com/products/category/${category}`)
    .then((res) => res.json())
    .then((data) => {
      const relatedProducts = data.products.filter(
        (p) => p.id !== parseInt(productId)
      );
      displayRelatedProducts(relatedProducts.slice(0, 4)); // Show max 4 related products
    })
    .catch((err) => {
      console.error("Error fetching related products:", err);
      // Fallback to hardcoded products if API fails
      displayRelatedProducts(getHardcodedProducts());
    });
}

// 4. Display related products
function displayRelatedProducts(products) {
  const container = document.getElementById("product-list");
  container.innerHTML = products
    .map(
      (product) => `
      <div class="col-md-3 mb-4">
        <div class="product-card">
          <img src="${
            product.image || product.thumbnail
          }" class="img-fluid mb-2" alt="${product.title}" />
          <h6>${product.title}</h6>
          <p class="price">Rs. ${product.price.toLocaleString("en-IN")}.00</p>
        </div>
      </div>
    `
    )
    .join("");
}

// 5. Hardcoded products fallback
function getHardcodedProducts() {
  return [
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
}

// 6. Helper function to change main image
function changeMainImage(src) {
  document.getElementById("mainImage").src = src;
}

// 7. Quantity controls
function changeQuantity(delta) {
  const input = document.getElementById("quantityInput");
  let value = parseInt(input.value) || 1;
  value = Math.max(1, value + delta); // Ensure minimum 1
  input.value = value;
}

// 8. Tabs content
const tabs = {
  desc: `
    <p>Portable, stylish speaker with clear sound and great battery life.</p>
    <p>Perfect for on-the-go music lovers!</p>
  `,
  info: `
    <p>Material: High-quality plastic</p>
    <p>Dimensions: 250 x 80 x 75 cm</p>
    <p>Weight: 3.2 kg</p>
  `,
  reviews: `
    <p>⭐️⭐️⭐️⭐️⭐️ - Amazing product!</p>
    <p>⭐️⭐️⭐️⭐️ - Loved it, worth the price.</p>
  `,
};

function showTab(tab, e) {
  document.getElementById("tab-content").innerHTML = tabs[tab];
  document.querySelectorAll(".tab-button").forEach((btn) => {
    btn.classList.remove("active");
  });
  e.target.classList.add("active");
}

// 9. Add to cart with better error handling
document.querySelector(".btn.btn-dark").addEventListener("click", addToCart);

function addToCart() {
  const quantity =
    parseInt(document.getElementById("quantityInput").value) || 1;

  fetch(`https://dummyjson.com/products/${productId}`)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch product");
      return res.json();
    })
    .then((product) => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = cart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.push({
          id: product.id,
          name: product.title,
          price: product.price,
          quantity: quantity,
          image: product.thumbnail,
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.title} (x${quantity}) added to cart!`);
      window.location.href = "cart.html";
    })
    .catch((err) => {
      console.error("Error adding to cart:", err);
      alert("Failed to add to cart. Please try again.");
    });
}

// Initialize default tab on load
window.onload = () =>
  showTab("desc", { target: document.querySelector(".tab-button") });
