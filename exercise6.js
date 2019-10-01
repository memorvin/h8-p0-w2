//1. Melakukan Looping Menggunakan While

console.log("LOOPING PERTAMA");
var i = 2;
while (i <= 20) {
    console.log(i + " - I love coding");
    i += 2;
}

console.log("LOOPING KEDUA");
var i = 20;
while (i >= 2) {
    console.log(i + " I will become fullstack developer");
    i -= 2;
}


//2. Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA");
for (var i = 1; i <= 20; i++) {
    console.log(i + " - I love coding");
}

console.log("LOOPING KEDUA");
for (var i = 20; i >= 1; i--) {
    console.log(i + " I will become fullstack developer");
}


//3. Angka Ganjil dan Genap

    //Ganjil genap

for (var counter = 1; counter <= 100; counter++) {
    if (counter % 2 === 0) {
      console.log("GENAP");
    } else {
      console.log("GANJIL");
    }
}

    //Kelipatan tiga

for (var counter = 1; counter <= 100; counter+=2) {
    if (counter % 3 === 0) {
      console.log(counter + " kelipatan 3");
    }
}

    //Kelipatan enam

for (var counter = 1; counter <= 100; counter+=5) {
    if (counter % 6 === 0) {
      console.log(counter + " kelipatan 6");
    }
}

    //Kelipatan 10

for (var counter = 1; counter <= 100; counter+=9) {
    if (counter % 10 === 0) {
      console.log(counter + " kelipatan 10");
    }
}