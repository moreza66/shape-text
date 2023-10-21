// 17. Alphabet Triangle 2

// A
// B B
// C C C
// D D D D
// E E E E E

function printAlphabetTriangle(row, totalRows) {
    if (row > totalRows) {
      return;
    }
  
    const letter = String.fromCharCode(64 + row);
    console.log(letter.repeat(row));
  
    printAlphabetTriangle(row + 1, totalRows);
  }
  
  const totalRows = 5;
  printAlphabetTriangle(1, totalRows);

  