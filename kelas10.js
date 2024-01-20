// KE Google Drive
const scriptURL =
  "https://script.google.com/macros/s/AKfycbw11AaPhe99uNn5yOvQjMdDeu8wKVFotEvEEkvAAoTc5iyAohqBwvyANe0nSrtPoSQ1kQ/exec";
const form = document.forms["form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".alert");
const cardIsi = document.querySelector(".card");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("nama");
  const name = nameInput.value.trim();

  if(!validateForm()){
    return;
  }


  const approvedNames = [
    "Chelsa",
    "Aviva",
    "Fachri",
    "Fely",
    "Tiara",
    "Nanda",
    "Renggi",
    "Nicholas",
    "Ikrar",
    "Rangga",
    "Felix",
    "Bagus",
    "Gentar",
    "Bayu",
    "Nadhin",
    "Dika",
    "Bintari",
    "Nadia",
    "Greta",
    "Putri",
    "Bagas",
    "Syahrul",
    "Azmi",
    "Fauzan",
    "chelsa",
    "aviva",
    "fachri",
    "fely",
    "tiara",
    "nanda",
    "renggi",
    "nicholas",
    "ikrar",
    "rangga",
    "felix",
    "bagus",
    "gentar",
    "bayu",
    "nadhin",
    "dika",
    "bintari",
    "nadia",
    "greta",
    "putri",
    "bagas",
    "syahrul",
    "azmi",
    "fauzan",
  ];
  if (!approvedNames.includes(name)) {
    alert(
      "Kesalahan nama! Perhatikan besar & kecilnya HURUF ! Lihat daftar nama di atas"
    );
    {
      nameInput.style.backgroundColor = "red";
      nameInput.style.color = "white";
      (nameInput.style.borderBlockStyle = "black"), "solid";
    }
    return;
  } else {
    nameInput.style.backgroundColor = "green";
    nameInput.style.color = "white";
  }

  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  btnReset.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      cardIsi.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// Objek aturan validasi berdasarkan nama

function validateForm() {
  var rules = {
    "Chelsa" : "X DPIB 1",
    "Aviva":"X DPIB 1",
    "Fachri":"X DPIB 2",
    "Fely":"X DPIB 2",
    "Renggi":"X DPIB 3",
    "Nanda":"X DPIB 3",
    "Tiara":"X DPIB 3",
    "Nicholas":"X DPIB 3",
    "Ikrar":"X TKR 1",
    "Syahrul":"X TKR 1",
    "Rangga":"X TKR 3",
    "Felix":"X TBSM 1",
    "Bagus":"X TBSM 1",
    "Fauzan":"X TBSM 2",
    "Gentar":"X TBSM 2",
    "Bagas":"X TBSM 2",
    "Bayu":"X TKJ 1",
    "Nadhin":"X TKJ 2",
    "Dika":"X TKJ 2",
    "Nadia":"X TKJ 3",
    "Bintari":"X TKJ 3",
    "Azmi":"X DKV 1",
    "Greta":"X DKV 2",
    "Putri":"X DKV 3",
    // Tambahkan aturan validasi lainnya sesuai kebutuhan
  };
  var nama = document.getElementById("nama").value;
  var kelas = document.getElementById("kelas").value;

  // Periksa aturan validasi berdasarkan nama
  if (rules.hasOwnProperty(nama) && kelas !== rules[nama]) {
    alert("Nama " + nama + " harus memilih kelas " + rules[nama] + ".");
    return false; // Mencegah pengiriman formulir jika validasi gagal
  } else {
    return true; // Izinkan pengiriman formulir jika semua validasi berhasil
  }
}

const btnReset = document.querySelector(".btn-reset");
btnReset.style.backgroundColor = "red";

//Kata sandi
function checkPassword() {
  var password = document.getElementById("password").value;

  if (password === "1011") {
    document.getElementById("passwordForm").style.display = "none";
    document.querySelector(".main").style.display = "block";
  } else {
    alert("Kata sandi salah. Coba lagi.");
  }
}

//lihat password

function showPassword() {
  var input = document.getElementById("password");

  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

// Jam di navbar

function updateJam() {
  const sekarang = new Date();
  const jam = sekarang.getHours().toString().padStart(2, "0");
  const menit = sekarang.getMinutes().toString().padStart(2, "0");
  const detik = sekarang.getSeconds().toString().padStart(2, "0");
  const jamDinding = `${jam}:${menit}:${detik}`;

  document.getElementById("waktu").innerText = jamDinding;
}

setInterval(updateJam, 1000);

updateClock();

// Akses Lokasi

// navigator.geolocation.getCurrentPosition(function (position) {
//   var userLocation = {
//     latitude: position.coords.latitude,
//     longitude: position.coords.longitude,
//   };
//   var allowedBounds = {
//     minLatitude: 112.497283,
//     maxLatitude: 112.497302,
//     minLongitude: -7.441625,
//     maxLongitude: -7.441503,
//   };
//   if (
//     userLocation.latitude < allowedBounds.minLatitude ||
//     userLocation.latitude > allowedBounds.maxLatitude ||
//     userLocation.longitude < allowedBounds.minLongitude ||
//     userLocation.longitude > allowedBounds.maxLongitude
//   ) {
//     alert(
//       "Akses Ditolak. Lokasi Anda tidak diizinkan. Mohon Hubungi saya"
//     );
//     window.location.href = "https://wa.me/6288803167910";
//   }
// });
