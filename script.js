// --- FUNGSI UNTUK MENGHASILKAN SUARA KLIK ---
function playClickSound() {
    let audio = new Audio('assets/switch.mp3'); // Sesuaikan dengan nama/lokasi filemu
    audio.volume = 0.5; // Atur volume dari 0.0 sampai 1.0
    audio.play();
}

function playSwooshSound() {
    let audio = new Audio('assets/swoosh.mp3'); // Sesuaikan dengan nama/lokasi filemu
    audio.volume = 0.5; // Atur volume dari 0.0 sampai 1.0
    audio.play();
}

document.addEventListener("DOMContentLoaded", function() {

    // (PASTIKAN FUNGSI playClickSound YANG DI ATAS ADA DI SINI ATAU DI LUAR)

    // --- TOGGLE AUTO / MANUAL ---
    const toggleContainer = document.querySelector('.toggle');
    const btnAuto = document.querySelector('.auto');
    const btnManual = document.querySelector('.manual');

    if (btnAuto && btnManual && toggleContainer) {
        btnAuto.addEventListener('click', () => {
            playSwooshSound();
            btnAuto.classList.add('active');
            btnManual.classList.remove('active');
            toggleContainer.classList.remove('is-manual'); 
        });

        btnManual.addEventListener('click', () => {
            playSwooshSound(); 
            btnManual.classList.add('active');
            btnAuto.classList.remove('active');
            toggleContainer.classList.add('is-manual'); 
        });
    }

    // --- TRAFFIC LIGHT ---
    // --- KODE UNTUK TRAFFIC LIGHT ---
const trafficContainer = document.querySelector('.traffic .button');
const btnRed = document.querySelector('.red');
const btnGreen = document.querySelector('.green');

// 1. Tangkap elemen gambar yang ada di dalam class .traffic
const trafficImg = document.querySelector('.traffic img'); 

if (btnRed && btnGreen && trafficContainer && trafficImg) {
    
    //if red button clicked
    btnRed.addEventListener('click', () => {
        playClickSound()
        btnRed.classList.add('active');
        btnGreen.classList.remove('active');
        trafficContainer.classList.remove('is-green');
        trafficImg.src = 'Assets/red lights.png'; 
    });

    //if green button clicked
    btnGreen.addEventListener('click', () => {
        playClickSound()
        btnGreen.classList.add('active');
        btnRed.classList.remove('active');
        trafficContainer.classList.add('is-green');
        trafficImg.src = 'Assets/green lights.png'; 
    });
}

// --- KODE UNTUK BRIDGE ---
const bridgeButton = document.querySelector('.bridge .button');
const bridgeIcon = document.querySelector('.bridge .button .icon');
const bridgeText = document.querySelector('.bridge .button p');

// Kita pasang event click di icon-nya (karena di CSS kamu, icon-nya yang punya cursor:pointer)
if (bridgeIcon && bridgeButton && bridgeText) {
    bridgeIcon.addEventListener('click', () => {
        
        // Opsional: Panggil efek suara yang tadi kita buat!
        // playSoftPop(); 

        // 1. Tambah/hapus class 'is-closed' di container button
        bridgeButton.classList.toggle('is-closed');

        // 2. Cek apakah tombol sedang ditutup atau dibuka, lalu ubah teksnya
        if (bridgeButton.classList.contains('is-closed')) {
            bridgeText.textContent = 'Closed';
        } else {
            bridgeText.textContent = 'Open';
        }
    });
}
});