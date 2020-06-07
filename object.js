// 1.1 Object (revisited)
// 1. object literal
// let mahasiswa = {
// nama: "abdurahman",
// energi: 30,
// makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
// },
// };

// let mahasiswa1 = {
// nama: "ardhya fellyta d.p",
// energi: 100,
// makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
// },
// };
// 2. function declaration x Object.create()
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain`);
//   },
//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, selamat tidur`);
//   },
// };
// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let abdurahman = Mahasiswa("Abdurahman", 50);

// 3. constructor function x Object.create()
// tidak perlu menginisialisasi variabel dan return. otomatis dibuatkan oleh javascript
// instance menggunakan new untuk memanggil fungsinya
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain`);
//   };
// }

// let abdurahman = new Mahasiswa("Abdurahman", 30);

// 4. prototype
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, selamat makan`;
// };
// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, selamat bermain`;
// };
// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Halo ${this.nama}, selamat tidur`;
// };
// let abdurahman = new Mahasiswa("Abdurahman", 30);

// versi class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan`;
  }
  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain`;
  }
  tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur`;
  }
}
let abdurahman = new Mahasiswa("Abdurahman", 30);
