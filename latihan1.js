// ambil semua element video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// pilih yang hanya javascript lanjutan
const jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")) // textContent.includes digunakan untuk mencari string sesuai yang diigingikan
  // ambil durasi masing-masing video
  .map((item) => item.dataset.duration) // dataset digunakan untuk mengambil data dari elemet HTML secara spesifik
  // ubah durasi menjadi integer, ubah menit menjadi detik
  .map((time) => {
    const parts = time.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  // jumlahkan semua detiknya
  .reduce((accu, curr) => accu + curr);
// ubah format menjadi jam menit detik
const format = () => {
  const hour = parseInt(jsLanjut / 3600);
  const minute = parseInt((jsLanjut % 3600) / 60);
  const second = parseInt(jsLanjut % 60);
  return hour + " jam " + minute + " menit " + second + " detik ";
};
// simpan di DOM
const duration = document.querySelector(".total-durasi");

duration.textContent = format();

// jumlah video JAVASCRIPT LANJUTAN

const sumVideos = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;

const sum = document.querySelector(".jumlah-video");
sum.textContent = sumVideos + " Video";
