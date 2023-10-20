// 18. Alphabet Triangle 3

// A
// B C
// D E F
// G H I J
// K L M N O

function printAlphabetTriangle3() {
    let currentLetter = 'A';
  
    for (let i = 1; i <= 5; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += currentLetter;
        currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
      }
  
      console.log(row);
    }
  }
  printAlphabetTriangle3()