//Untuk penghubung antara UI HTML dan model User

document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userManager = new User();

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userData = {
      username: document.getElementById("username").value, //mengambil data dari input type yang memiliki id username
    };

    const result = userManager.saveUser(userData); // untuk melempar data ke file user.js

    if (result.success) {
      return (window.location.href = "../signin.html");
    } else {
      console.log("Proses Simpan Data Gagal");
    }
  });
});
