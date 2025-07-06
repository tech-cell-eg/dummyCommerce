const NavbarContainer = `
<nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top py-3 shadow-sm">
      <div class="container justify-content-between">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="mainNavbar"
        >
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link custom-link" href="../index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link custom-link" href="../shop.html">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link custom-link" href="../pages/contact.html">Contact</a>
            </li>
          </ul>
        </div>
        <div class="d-flex gap-3">
          <a href="../my-account.html" class="text-dark"
            ><i class="bi bi-person"><i class="fa-solid fa-user-large"></i></i
          ></a>
          <a href="../shop.html" class="text-dark"
            ><i class="bi bi-search"
              ><i class="fa-solid fa-magnifying-glass"></i></i
          ></a>
          <a href="#" class="text-dark"
            ><i class="bi bi-heart"><i class="fa-solid fa-heart"></i></i
          ></a>
          <a href="../cart.html" class="text-dark"
            ><i class="bi bi-cart"><i class="fa-solid fa-cart-shopping"></i></i
          ></a>
        </div>
      </div>
    </nav>
    `;
document.getElementById("navbar-container").innerHTML = NavbarContainer;

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// تعديل الهوامش تلقائياً
document.addEventListener("DOMContentLoaded", function () {
  const navbarHeight = document.querySelector(".navbar").offsetHeight;
  document.body.style.paddingTop = navbarHeight + "px";
});
