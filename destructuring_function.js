// with array, look at the position, required !!

// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// without rest parameter

// const [jumlah, kurang, kali, bagi] = kalkulasi(2, 3);

// with rest parameter

// const [jumlah, kurang, ...arit] = kalkulasi(2, 3);

// console.log(arit[0]);

// with object, without look at the position instance

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, tambah, kurang, kali } = kalkulasi(2, 3);

// console.log(bagi);
// console.log(kurang);

const mhs1 = {
  nama: "Abdurahman",
  umur: 22,
  email: "abdurahmanrizal1@gmail.com",
  nilai: {
    tugas: 90,
    uts: 87,
    uas: 85,
  },
};

// first step

// function cetakMhs(nama, umur) {
//   return `Halo nama saya ${nama}, saya berumur ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));

// second step

// function cetakMhs(mhs1) {
//   return `Halo nama saya ${mhs1.nama}, saya berumur ${mhs1.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));

// third step with destructing assignment

function cetakMhs({
  nama: name,
  umur: old,
  email: e = "abdurahmanrizal10@gmail.com",
  //   nilai: { tugas, uts, uas }, // destructing object bersarang
  nilai, // destructing object bersarang
}) {
  //   return `Halo nama saya ${name}, saya berumur ${old} tahun dan email saya adalah ${e} serta nilai tugas saya adalah ${Math.round(
  //     (tugas + uts + uas) / nilai,
  //     2
  //   )}.`;
  let arr = Object.keys(nilai).map((k) => nilai[k]);
  return `Halo nama saya ${name}, saya berumur ${old} tahun dan email saya adalah ${e} serta nilai tugas saya adalah ${
    (arr[0] + arr[1] + arr[2]) / arr.length
  }.`;
}

console.log(cetakMhs(mhs1));
