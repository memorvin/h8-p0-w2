//XO

function xo(str) {
    var a = 0;
    var b = 0;
  
    for (var i = 0; i < str.length; i++) { 
      if (str[i] == "x") { 
        a += 1;
      } else if (str[i] == "o") {
        b += 1;
      } else {
        return "invalid";
      }
    }
  
    if (a === b) {
        return 'true';
      } else {
        return 'false';
    }
  }
  
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
  