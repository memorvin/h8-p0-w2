//1. Menyusun Barisan Bintang

var rows1 = 5;
var i = 1;

while (i <= rows1) {
    console.log('*');
    i++;
}


//2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5;

for (var i = 1; i <= rows2; i++) {
  var stars = '';
  for (var j = 1; j <= rows2; j++) {
    stars += '*';
  }
  console.log(stars);
}


//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5;

for (var i = 1; i <= rows3; i++) {
  var stars = '';
  for (var j = 1; j <= i; j++) {
    stars += '*';
  }
  console.log(stars);
}