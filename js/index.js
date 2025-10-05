window.addEventListener("load", () => {
    const loading = document.getElementById("loading");
    loading.classList.add("hidden");
    setTimeout(() => loading.style.display="none", 600);
})

// ambil bagian food
const food = document.getElementById("food");
// ambil baris 1 dari food
const baris1 = food.querySelector(".row1");
// ambil baris 2 dari food
const baris2 = food.querySelector(".row2");

// cari lebar terbesar dari 2 baris buat nentuin yang nyisa di belakang ada berapa card food
const barisTerlebar = Math.max(baris1.scrollWidth, baris2.scrollWidth);
// ambil lebar layar user
const lebarUser = food.clientWidth;
//  nentuin berapa card yg bakal ditampilin sesuai lebar layar user, jadi misal lebar baris terlebar itu 2000px di layar user cuma lebar 300px bisanya, maka card yg ga kliatan itu 1700px dan itu akan ditangani oleh animasi scroll
const lebarTersembunyi = barisTerlebar - lebarUser;


// bikin var current buat nentuin saat ini ada dimana
let current = 0;
// buat var target buat nentuin target scroll
let target = 0;

function smoothScroll() {
    // isi var target dengan sejauh apa sudah scroll dikurangin jarak dari atas ke bagian #food penting buat bikin animasi jalan ketika hanya ada di halaman itu
    target = window.scrollY - food.offsetTop;

    // jika targer lebih besar dari 0 atau == 0, dan target lebih kecil dari sisa card tersembunyi atau sama denan sisa card tersembunyi, maka jalankan animasi, kenapa pake sisa card tersembunyi karena jika card tersembunyinya habis maka animasinya stop

     if ( target >= 0 && target <= lebarTersembunyi ) {
        current += (target - current) * 0.1;
        // baris 1 geser ke kiri karna x nya ditranslate  -
        baris1.style.transform = `translateX(-${target}px)`;
        // baris 2 geser ke kiri karna x nya ditranslate  -
        baris2.style.transform = `translateX(${target}px)`;
    }
    requestAnimationFrame(smoothScroll);
}
smoothScroll();

const questions = document.querySelectorAll(".question");
questions.forEach(q => {
    q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
        // const isActive = answer.classList.contains("show");
        // kalo udah aktif matiin
        q.classList.toggle("active");
        answer.classList.toggle("show");


        // if (isActive) {
        //     q.classList.remove("active");
        //     answer.classList.remove("show");
        // } else {
        //     q.classList.add("active");
        //     answer.classList.add("show");
        // }
    })
})

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
});

