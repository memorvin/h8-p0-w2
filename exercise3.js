var nama = prompt("Silakan isi nama");

if (nama === null) {
    console.log("Nama harus diisi!");
} else {
    console.log("Selamat datang di Dunia Proxytia," + nama);
}

var peran = prompt("Silakan pilih peran sebagai Ksatria, Tabib, atau Penyihir");

if (nama != null && peran === null) {
    console.log("Halo" + nama + ", Pilih peranmu untuk memulai game!");
} else {
    if (peran = 'ksatria'){
        console.log("Halo Ksatria" + nama + ", kamu dapat menyerang dengan senjatamu!")
    } else if (peran = 'tabib'){
        console.log("Halo Tabib" + nama + ", kamu akan membantu temanmu yang terluka.")
    } else {
        console.log("Halo Penyihir" + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
    }
}