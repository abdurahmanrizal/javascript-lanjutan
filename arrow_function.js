// arrow function adalah function expression yang ringkas

// contoh function expression

// const tampilNama = function (nama) {
//   return `Halo ${nama}`;
// };

// console.log(tampilNama("Annisa"));

// contoh arrow function

// const tampilNama = (nama) => {
//   return `Halo ${nama}`;
// };

// console.log(tampilNama("Abdurahman"));

// contoh arrow function dengan satu arguments x implisit return

// const tampilNama = (nama) => `Halo ${nama}`;
// console.log(tampilNama("Abdurahman"));

// contoh arrow function dengan lebih dari satu arguments

// const tampilNama = (nama, waktu) => `Selamat ${waktu}, ${nama}`;
// console.log(tampilNama("Abdurahman", "Malam"));

// contoh arrow function tanpa arguments

// const sayHello = () => `Hello World!`;
// console.log(sayHello)();

let mahasiswa = ["Abdurahman", "Annisa", "luffy"];

// menggunakan function expression
// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });

// menggunakan arrow function
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);

// mengembalikan nilai object menggunakan arrow function

let jumlahHuruf = mahasiswa.map((nama) => ({
  nama: nama,
  jmlHuruf: nama.length,
}));

console.table(jumlahHuruf);
