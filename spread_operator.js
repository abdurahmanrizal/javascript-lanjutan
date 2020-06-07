// spread operator

// const mhs = ["Abdurahman", "Rahman", "Rizal"];

// console.log(...mhs);

// spread operator dapat digunakan untuk menggabungkan dua buah array

// const dosen = ["javascript", "PHP", "Python"];

// const languange = [...mhs, "Ruby", ...dosen];

// apa beda nya dengan menggunakan method concat?? lebih ke fleksibelan untuk menambahkan data
// const c = mhs.concat(dosen);

// console.log(c);

// console.log(languange);

// dapat digunakan untuk meng copy array
// const mhs = ["Abdurahman", "Rahman", "Rizal"];
// const mhs1 = [...mhs];
// mhs1[0] = "felly";
// console.log(mhs1);

//
// const liMhs = document.querySelectorAll("li");
// const mhs = [];
// // teknik for
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }
// // teknik map
// const mhs1 = [...liMhs].map((m) => console.log(m.textContent));

// console.log(mhs);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((m) => `<span>${m}</span>`).join("");
nama.innerHTML = huruf;
console.log(huruf);
