// konsep this pada arrow function

// constructor function
// const Mahasiswa = function () {
//   this.nama = "Abdurahman";
//   this.umur = 22;
//   this.sayHello = function () {
//     console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
//   };
// };

// const abdurahman = new Mahasiswa();

// Arrow function

// const Mahasiswa = function () {
//   this.nama = "Abdurahman";
//   this.umur = 22;
//   this.sayHello = () => {
//     console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
//   };
// };

// const abdurahman = new Mahasiswa();

// object literal

// const mhs1 = {
//   nama: "abdurahman",
//   umur: 22,
//   sayHello: () => {
//     console.log(`Halo nama saya ${mhs1.nama}, umur saya ${mhs1.umur} tahun.`);
//   },
// };

// example
// this.umur = 22;
// const Mahasiswa = function () {
//   this.nama = "Abdurahman";
//   this.umur = 22;
//   this.sayHello = function () {
//     console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
//   };

//   //   setInterval(function () {
//   //     // menggunakan function declaration
//   //     console.log(this);
//   //   }, 500);

//   setInterval(() => {
//     // menggunakan arrow function
//     console.log(this.umur++);
//   }, 500);
// };

// const abdurahman = new Mahasiswa();

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    satu = temp;
    dua = satu;
    temp = dua;
    [(satu, dua)] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
