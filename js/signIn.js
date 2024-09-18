//Untuk penghubung antara UI HTML dan model User

document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userManager = new User();

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usernameByInput = document.getElementById("username").value; //mengambil data dari input type yang memiliki id username

    const result = userManager.signInUser(usernameByInput); // untuk melempar data ke file user.js

    if (result.success) {
      localStorage.setItem("usernameLoggedIn", usernameByInput);
      return (window.location.href = "../tasks.html");
    } else {
      alert("Username Tidak Ditemukan!!!, silakan mendaftar terlebih dahulu");
      console.log(result.message);
    }
  });
});
