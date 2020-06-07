// const mhs = ["Abdurahman", "Felly", "Anisa"];

// looping menggunakan for
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// looping menggunakan forEach
// mhs.forEach((m) => console.log(m));

// looping menggunakan for of
// yang termasuk dalam for of yaitu yang iterable seperti string, array, nodelist, dsb

// array
// for (const m of mhs) {
//   console.log(m);
// }

// string
// const nama = "Abdurahman";
// for (const n of nama) {
//   console.log(n);
// }

// membuat looping nama dan mengetahui nama tersebut index ke berapa
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// });

// apabila menggunakan for of harus menambahkan method yaitu entries terus nanti di destructurisasi
// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// }

// const liNama = document.querySelectorAll(".nama");

// menggunakan forEach
// liNama.forEach((n) => console.log(n.textContent));

// menggunakan for of
// for (n of liNama) {
//   console.log(n.textContent);
// }

// ARGUMENTS
// function jumlahkanAngka() {
//   // tidak bisa menggunakan forEach karena arguments bukan array
//   // menggunakan high order function reduce
//   // return [1, 2, 3, 4, 5].reduce((a, i) => a + i);

//   let sum = 0;

//   //   menggunakan forEach
//   //   [1, 2, 3, 4, 5].forEach((arr) => {
//   //     sum += arr;
//   //   });

//   for (arr of arguments) {
//     sum += arr;
//   }

//   return sum;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for in digunakan untuk looping enumerable (object)
const mhs = [
  {
    nama: "Abdurahman",
    umur: 22,
    email: "abdurahmanrizal1@gmail.com",
  },
  {
    nama: "Abdurahma",
    umur: 22,
    email: "abdurahmanrizal1@gmail.com",
  },
  {
    nama: "Abdurahm",
    umur: 22,
    email: "abdurahmanrizal1@gmail.com",
  },
];
// console.log(mhs);
for (m of mhs) {
  for (obj in m) {
    console.log(m[obj]);
  }
}
