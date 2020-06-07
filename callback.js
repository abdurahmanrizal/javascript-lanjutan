// synchronous
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(func) {
//   const nama = prompt("Masukkan Nama:");
//   func(nama);
// }

// tampilkanPesan((nama) => alert(`Halo, ${nama}`));

// const mhs = [
//   {
//     nama: "Abdurahman",
//     umur: 22,
//     email: "abdurahmanrizal1@gmail.com",
//   },
//   {
//     nama: "Ardhya Fellyta D.P",
//     umur: 22,
//     email: "ardhyafellyta11@gmail.com",
//   },
// ];
// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("selesai");

// ajax vanilla js x asynchronous callback
function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };
  //   xhr.open('method', 'url')
  xhr.open("get", url);
  xhr.send();
}
console.log("mulai");

// with vanilla js

// getDataMahasiswa(
//   "data/mahasiswa.json",
//   (results) => {
//     let parse = JSON.parse(results);
//     parse.forEach((p) => console.log(p.nama));
//     // console.log(JSON.parse(results));
//   },
//   () => {}
// );

// with jQuery

// $.ajax({
//   url: "data/mahasiswa.json",
//   success: function (mhs) {
//     let mahasiswa = JSON.parse(mhs);
//     mahasiswa.forEach((m) => console.log(m.nama));
//   },
//   error: function (e) {
//     console.log(e.responseText);
//   },
// });

// with fetch ajax function vanilla js

fetch("data/mahasiswa.json")
  .then((response) => response.json())
  .then((results) => console.log(results)) // success response
  .catch((error) => console.error("error:", error));
console.log("selesai");
