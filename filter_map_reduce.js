const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9, 16];
// mencari angka >= 3
// const newArr = [];

// dengan looping
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newArr.push(angka[i]);
//   }
// }
// console.log(newArr);

// filter javascript x function expression

// const newAngka = angka.filter(function (a) {
//   return a >= 3;
// });

// filter javascript x arrow function

// const newAngka = angka.filter((a) => a >= 3);

// console.log(newAngka);

// map javascript
// kalikan semua angka dengan 2
// const xAngka = angka.map((a) => a * 2);
// console.log(angka);
// console.log(xAngka);

// reduce javascript
// jumlahkan semua angka yang terdapat array
// const sumAngka = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(sumAngka);

// metode chaining
// cari angka > 5
// kalikan 3
// jumlahkan

const res = angka
  .filter((a) => a > 5) // 8,9,9,16
  .map((a) => a * 3) // 24, 27, 27, 48
  .map((a) => (a % 2 == 0 ? a : 0)) // 24,48
  .reduce((acc, cur) => acc + cur); // 72

console.log(res);
