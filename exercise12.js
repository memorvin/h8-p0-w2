//Konversi Menit

function konversiMenit(angka) {
  var jam = Math.floor(angka/60);
  var menit = String((angka%60)/10);
  var result = jam + ':' + menit[0] + menit[menit.length-1];
  return result;
}

console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));