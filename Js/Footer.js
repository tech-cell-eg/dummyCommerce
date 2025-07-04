const FooterContainer = `
<footer class="footer mt-5 border-top">
  <div class="container py-5">
    <div class="row gy-4">
      <!-- Address -->
      <div class="col-md-3">
        <p class="footer-text mb-0">
          400 University Drive Suite 200 Coral Gables,<br />
          FL 33134 USA
        </p>
      </div>

      <!-- Links -->
      <div class="col-md-3">
        <h6 class="footer-heading">Links</h6>
        <ul class="list-unstyled">
          <li><a href="../home.html" class="footer-link footer-li">Home</a></li>
          <li><a href="../shop.html" class="footer-link footer-li">Shop</a></li>
          <li><a href="#" class="footer-link footer-li">About</a></li>
          <li><a href="../pages/contact.html" class="footer-link footer-li">Contact</a></li>
        </ul>
      </div>

      <!-- Help -->
      <div class="col-md-3">
        <h6 class="footer-heading">Help</h6>
        <ul class="list-unstyled">
          <li><a href="#" class="footer-link footer-li">Payment Options</a></li>
          <li><a href="#" class="footer-link footer-li">Returns</a></li>
          <li><a href="#" class="footer-link footer-li">Privacy Policies</a></li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div class="col-md-3">
        <h6 class="footer-heading">Newsletter</h6>
        <form class="d-flex border-bottom pb-1">
          <input
            type="email"
            class="form-control border-0 shadow-none footer-input"
            placeholder="Enter Your Email Address"
          />
          <button type="submit" class="btn footer-subscribe-btn ">Subscribe</button>
        </form>
      </div>
    </div>

    <hr class="mt-5" />

    <p class="text-center footer-copy mt-3 mb-0">
      2022 Meubel House. All rights reserved
    </p>
  </div>
</footer>
`;
document.getElementById("footer-container").innerHTML = FooterContainer;
