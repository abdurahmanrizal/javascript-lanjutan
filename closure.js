// 2. Closure

// 2.1 Execution context, hoisting, & scope
// var nama = "Abdurahman";
// console.log(nama);

// creation phase
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window
// execution phase

// function membuat local execution context
// yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// function a() {
//   console.log("ini a");
//   function b() {
//     console.log("ini b");
//     function c() {
//       console.log("ini c");
//     }
//     a();
//   }
//   b();
// }
// c();

// contoh closure
// function init() {
//   let nama = "Abdurahman";
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
// }
// init();

// contoh closure dengan nama yang dinamis
// function init() {
//   function tampilNama(nama) {
//     console.log(nama);
//   }
//   return tampilNama;
// }
// let panggilNama = init();
// panggilNama("Annisa");

// contoh closure dengan anonymous function
// function init() {
//   return function (nama) {
//     console.log(nama);
//   };
// }
// let panggilNama = init();
// panggilNama("Abdurahman");

// contoh function factories closure
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Selamat ${waktu}, hai ${nama} semoga hari mu menyenangkan!`);
//   };
// }

// let selamatPagi = ucapkanSalam("pagi");
// let selamatSiang = ucapkanSalam("siang");
// let selamatMalam = ucapkanSalam("malam");

// selamatPagi("Abdurahman");
// selamatMalam("Annisa");

// conton private method x immediatelly invoke function
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
