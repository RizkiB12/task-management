//file ini digunakan untuk mengurus business logic
// file ini digunakan untuk mengelola data seperti create, read, update, etc

//ketika membuat kelas user kita ingin membuat object User
class User {
  constructor() {
    //sebuah function dijalankan pertama kali apabila user di import ke dalam html ata file js lainnya
    this.users = this.getUsers() || []; //mengambil seluruh data pengguna yg sudah disimpan di local storage
  }

  saveUser(userData) {
    const newUser = {
      id: Date.now(), //date now karena akan mengenerate sebuah int secara unik dan simple
      ...userData, //sprite operators
    };

    this.users.push(newUser); //untuk menyimpan data di local storage
    localStorage.setItem("users", JSON.stringify(this.users)); //mengubah menjadi string

    // return (window.location.href = "../signin.html"); //agar setelah buat user kita bisa pindah ke halaman sign in langsung

    return {
      success: true,
    };
  }

  signInUser(usernameByInput) {
    // proses pemeriksaan data usernama pada localstorage

    const userExists = this.users.some(
      (user) => user.username.toLowerCase() === usernameByInput.toLowerCase()
    );

    if (userExists) {
      // proses mengembalikan data ke signIn.js controller
      return {
        success: true,
        username,
      };
    } else {
      return {
        success: false,
        message: "Data tidak ditemukan",
      };
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || []; // ketika file ini dijalankan ketika ga ada data akan menjalankan array kosong
    //ketika ingin mengambilnya lagi kita pake parse
  }
}
