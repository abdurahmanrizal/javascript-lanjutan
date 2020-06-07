// contoh 1

// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah ditepati!");
//   } else {
//     reject("Ingkar janji..");
//   }
// });
// janji1
//   .then((response) => console.log("OK !" + response)) // aksi untuk resolve
//   .catch((response) => console.log("NOT OK!" + response)); // aksu untuk reject

// contoh 2

// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu!");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Tidak ditepati setelah beberapa waktu!");
//     }, 2000);
//   }
// });

// console.log("mulai");
// // console.log(
// //   janji2
// //     .then((response) => console.log(janji2))
// //     .catch((response) => console.log(janji2))
// // );
// janji2
//   .then((response) => console.log("OK! " + response))
//   .catch((response) => console.log("Not OK! " + response));
// console.log("selesai");

// Promise.all
// digunakan untuk mengambil lebih dari satu promise sekaligus

const movie = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Abdurahman",
        actor: "Felly, Donny",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Semarang",
        temp: 30,
        kondisi: "Panas",
      },
    ]);
  }, 500);
});
// not use promise all

// movie.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

// use promise all
// Promise.all([movie, cuaca]).then((response) => console.log(response));

// use promise all with separator operation
Promise.all([movie, cuaca]).then((response) => {
  const [movie, cuaca] = response;
  console.log(movie);
  console.log(cuaca);
});
