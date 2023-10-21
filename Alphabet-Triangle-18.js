// 18. Alphabet Triangle 3

// A
// B C
// D E F
// G H I J
// K L M N O

function printAlphabetTriangle3(row, maxRows, currentChar) {
    if (row > maxRows) {
      return;
    }
  
    let rowChars = [];
    for (let i = 0; i < row; i++) {
      rowChars.push(currentChar);
      currentChar = String.fromCharCode(currentChar.charCodeAt(0) + 1);
    }
  
    console.log(rowChars.join(' '));
  
    printAlphabetTriangle3(row + 1, maxRows, currentChar);
  }
  
  printAlphabetTriangle3(1, 5, 'A');
  