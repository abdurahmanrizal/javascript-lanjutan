// destructuring assignment array
const perkenalan = ["halo", "nama", "saya", "abdurahman"];

// with usually technique
// const salam = perkenalan[0];
// const nama = perkenalan[3];

// with destructuring assignment technique

// const [salam, satu, dua, nama] = perkenalan;

// skipping index destructuring assignment

// const [salam, , , nama] = perkenalan;

// console.log(nama);

// swap item

// let a = 1;
// let b = 2;
// let tmp = "";

// usually technique

// console.log(a);
// console.log(b);

// tmp = a;
// a = b;
// b = tmp;

// console.log(a);
// console.log(b);

// with destructuring assignment technique
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function

function coba() {
  // return value usually array
  return [1, 2, 3, 4, 5, 6, 7];
}
// call usually
// const [a, b, c, d, e, f, g] = coba();
// console.log(g);

// dynamic calling with rest parameter

const [a, ...values] = coba();
console.log(values);
// destructuring assignment object

const mhs = {
  id: 123,
  nama: "Abdurahman",
  umur: 33,
  email: "abdurahmanrizal10@gmail.com",
};

// const { nama, umur } = mhs;

// console.log(nama);
// console.log(umur);

// destructuring assignment object tanpa deklarasi variabel baru
// ({ nama, mhs } = {
//   nama: "Abdurahman",
//   umur: 33,
// });

// console.log(nama);

// const { nama: n, umur: u, email: e = "abdurahmanrizal1@gmail.com" } = mhs;

// destructuring object with rest paramater
// const { nama: n, ...value } = mhs;
// console.log(value.email);

// call return usually object with usually function
// function getidMhs(mhs) {
//     return mhs.id;
// }
// mengambil field parameter dengan rest paramater
function getidMhs({ id, ...value }) {
  return value.nama;
}
console.log(getidMhs(mhs));
