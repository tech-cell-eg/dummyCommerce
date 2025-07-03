 
    let data = { products: [] };

   
    async function getProducts() {
      const response = await fetch("https://dummyjson.com/products");
      if (response.ok) {
        data = await response.json();
        document.getElementById("show").innerText = data.products.length;
        applyFilters(); 
      }
    }

    function displayData(productList) {
      const cards = productList
        .map(
          (item) => `
        <div class="col-md-3 mb-4">
          <div class=" ">
            <img src="${item.thumbnail}" class="card-img-top" style="height:287px;object-fit:cover" alt="${item.title}">
            <div class="card-body text-center">
              <p class="fw-bold mb-1">${item.title}</p>
              <p class="h5 text-primary mb-0">Rs. ${item.price}</p>
            </div>
          </div>
        </div>`
        )
        .join("");

      document.getElementById("row").innerHTML = cards;
    }

    
    function applyFilters() {
      const categoryVal = document.getElementById("categoryFilter").value;
      const sortVal = document.getElementById("priceSortFilter").value;

      let result = data.products.filter(
        (p) => categoryVal === "all" || p.category.toLowerCase() === categoryVal
      );

      if (sortVal === "asc") result.sort((a, b) => a.price - b.price);
      else if (sortVal === "desc") result.sort((a, b) => b.price - a.price);

      displayData(result);
    }

   
    document.getElementById("filterToggle").addEventListener("click", () => {
      const box = document.getElementById("categoryContainer");
      box.style.display = box.style.display === "none" ? "inline" : "none";
    });
 
    document.addEventListener("DOMContentLoaded", () => {
      getProducts();
      document.getElementById("priceSortFilter").addEventListener("change", applyFilters);
      document.getElementById("categoryFilter").addEventListener("change", applyFilters);
    });
  
