// const mhs = [
//   {
//     nama: "Abdurahman",
//     email: "abdurahmanrizal1@gmail.com",
//   },
//   {
//     nama: "Ardhya Fellyta D.P",
//     email: "ardhyafellyta11@gmail.com",
//   },
//   {
//     nama: "Erling Haaland",
//     email: "erling@dortmund.football",
//   },
// ];
// // looping
// const el = `<div class="mhs">
//     ${mhs
//       .map(
//         (m) => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`
//       )
//       .join("")}
// </div>`;

// pengkondisian
// const songs = [
//   {
//     penyanyi: "Linkin Park",
//     judul: "In the End",
//   },
//   {
//     penyanyi: "The Chainsmoker",
//     featuring: "Coldplay",
//     judul: "Something Just Like This",
//   },
// ];

// const el = `<div class="lagu">
//    <div>
//         ${songs
//           .map(
//             (song) => `<ul>
//             <li>${song.penyanyi}</li>
//             <li>${song.judul} ${
//               song.featuring ? `(feat ${song.featuring})` : ""
//             }</li>
//         </ul>`
//           )
//           .join("")}
//    </div>
// </div>`;

// nested
// HTML Fragment bersarang

const album = {
  band: "Linkin Park",
  from: "USA",
  playlist: ["In the End", "Numb", "What I ve done", "Somewhere I belong"],
};

const el = `<div class="album">
    <h2>Nama Band : ${album.band}</h2>
    <span>${album.from}</span>
    <h6>Lagu Favorit</h6>
    <ol>
        ${album.playlist
          .map(
            (item) => `<li>
            ${item}
        </li>`
          )
          .join("")}
    </ol>
</div>`;
// high order function digunakan untuk menggabung data
document.body.innerHTML = el;
