//
const nama = "Abdurahman";
const umur = 22;

// function coba(strings, ...values) {
//   //   return strings; // string dipecah berdasarkan expression yang terdapat pada template string yang dibuat
//   // ... digunakan untuk mengambil keselurahan expression yang dibuat
//   //   let result = "";
//   //   strings.forEach((str, i) => {
//   //     result += `${str}${values[i] || ""}`;
//   //   });
//   //   return result; // kenapa terjadi undefined di akhir pembuatan string karena string lebih besar satu

//   //  with high order function reduce
//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }
function ao(strings, ...values) {
  return strings.reduce(
    (result, str, i) => `${result}${str}${values[i] || ""}`,
    ""
  );
}
const str = ao`Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
console.log(str);
