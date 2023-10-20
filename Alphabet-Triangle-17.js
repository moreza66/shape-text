// 17. Alphabet Triangle 2

// A
// B B
// C C C
// D D D D
// E E E E E

function printPattern() {
    for (let i = 1; i <= 5; i++) {
      const letter = String.fromCharCode(64 + i); // Convert to A, B, C, etc.
      let row = '';
  
      // Create the row content based on the value of i
      for (let j = 1; j <= i; j++) {
        row += letter;
      }
  
      console.log(row); // Display the row
    }
  }
  printPattern();


  