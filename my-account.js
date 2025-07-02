

document.addEventListener("DOMContentLoaded", () => {
document.querySelector(".login-signup .login #login-form").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
      expiresInMins: 30,
    }),

  })
    .then((res) => {
      if (!res.ok) throw new Error("Login failed");
      return res.json();
    })
    .then((data) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      return fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + data.accessToken,
        },
       
      });
    })
    .then((res) => res.json())
    .then((userData) => {
      alert("Welcome " + userData.firstName + "!");
      window.location.href = "home.html";
    })
    .catch((err) => {
      console.error(err);
      alert(" Login failed. Please check your credentials.");
    });
});



});
 document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("register-email");
    const email = emailInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert(" Please enter a valid email address.");
      emailInput.focus();
      return;
    }

    alert("go to your E-mail");
   
  });
