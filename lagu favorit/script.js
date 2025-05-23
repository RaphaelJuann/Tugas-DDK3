//membuat data array berisi 3 lagu favorit (judul, penyanyi, jumlah_likes, jumlah_play)

var musik = [
    ['Mangu', 'Fourtwnty', 43823, 67584, 'mangu.jpg'],
    ['Slalu Ada di Nadi', 'B.C.L', 1500, 2300, 'lesung_pipi.jpg'],
    ['Lesung Pipi', 'Raim LaOde', 2440, 5400, 'jumbo.jpg'],
    ['Unholy confessions', 'A7X', 29387, 35984, 'a7x.jpg'],
    ['Hysteria', 'Muse', 53842, 79874, 'muse.jpg'],
    ['Canon Rock', 'JerryC', 43098, 74843, 'jerryc.jpg'],
    ['November Rain', 'GnR', 37844, 63432, 'gnr.jpg'],
    
];

var daftar = "";

musik.forEach(function(lagu) {
daftar += `
        <div class="lagu">
            <h2>'${lagu[0]}</h2>
            <small>
                <i>Oleh ${lagu[1]}</i>
            </small>
            <div class="image-container">
            <img calss="image" src="img/${lagu[4]}" alt="" srcset="">
            </div>
            <div class="bawah">
                <div class="kanan">Disukai ${lagu[2]}</div>
                <div class="kiri">Dimainkan ${lagu[3]} kali</div>
            </div>
        </div>`;
});

var kkonten = document.getElementById("container");
    kkonten.innerHTML = daftar;

