// 17. Alphabet Triangle 2

// A
// B B
// C C C
// D D D D
// E E E E E

function alphabetTriangle () {
    for (let i = 1; i <= 5; i++){
        const letter = String.fromCharCode(64 + i);
        let row = '';
        for (let j = 1; j <= i; j++) {
          row += letter;
        }
        console.log(row);
      }
    }
    alphabetTriangle ();


  