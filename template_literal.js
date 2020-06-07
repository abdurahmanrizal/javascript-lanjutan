// template literal pada javascript menggunakan ` => backtick

// ex template literal/ template string

const mhs = {
  nama: "Abdurahman",
  umur: 22,
};

const sayHello = `Halo nama saya ${mhs.nama} dan saya berumur ${mhs.umur} tahun.`;

// dapat digunakan untuk membuat HTML Fragments
const convertHTML = `<div class="mhs">
    <p>Hello my name is ${mhs.nama}</p>
    <p>I'm ${mhs.umur} years old</p>
</div>`;

// dapat digunkan untuk melakukan expression
const aritmatic = `Halo saya ${mhs.nama}, tahun ini saya berumur ${
  mhs.umur
} tahun, 5 tahun lagi saya berumur ${mhs.umur + 5} tahun`;

//
const born = function (day, month, year) {
  return `saya lahir pada tanggal ${day}, bulan ${convertMonth(
    month
  )}, tahun ${year}`;
};
const convertMonth = (month) => {
  switch (month) {
    case 1:
      return "Januari";
      break;
    case 2:
      return "Februari";
      break;
    case 3:
      return "Maret";
      break;
    case 4:
      return "April";
      break;
    case 5:
      return "Mei";
      break;
    case 6:
      return "Juni";
      break;
    case 7:
      return "Juli";
      break;
    case 8:
      return "Agustus";
      break;
    case 9:
      return "September";
      break;
    case 10:
      return "Oktober";
      break;
    case 11:
      return "November";
      break;
    case 12:
      return "Desember";
      break;
    default:
      return "undefined";
      break;
  }
};
const abdurahman = born(13, 20, 1998);
