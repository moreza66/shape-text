// 1. Square

// *****
// *****
// *****
// *****
// *****

const square = Array(5).fill('');

  square.forEach((_,i) => {
    const row = Array(5).fill('*').join('');
    console.log(row);
  });


// 3. Triangle 1

//     *
//    **
//   ***
//  ****
// *****

const numRows = 5;

Array(numRows).fill().forEach((_, i) => {
  const stars = Array(i + 1).fill('*').join('');

  const space = Array(numRows - i - 1).fill(' ').join('');

  console.log(space + stars);
});

// 14. Reverse Empty Pyramid

// *********
//  *     *
//   *   *
//    * *
//     *
  
const numRows = 5; 
const output = Array(numRows).fill("");
 
output.forEach((_, rowIndex) => {
  const spaces = Array(rowIndex).fill(" ").join("");
   
  const stars = (rowIndex === 0 || rowIndex === numRows - 1) ?
    Array(2 * (numRows - rowIndex) - 1).fill("*").join("") :
    "*" + Array(2 * (numRows - rowIndex - 1) - 1).fill(" ").join("") + "*";

  const row = spaces + stars + spaces; 
  console.log(row);
});

// 22. Alphabet Diamond

//     A
//    ABC
//   ABCDE
//  ABCDEFG
// ABCDEFGHI
//  ABCDEFG
//   ABCDE
//    ABC
//     A

const numRows = 5;
const alphabet = 'ABCDEFGHI';

Array(numRows).fill().forEach((_, i) => {
  const spaces= Array(numRows - i).fill(' ').join('')
  const characters= Array(2 * i + 1).fill().map((_, j) => { return alphabet[j] }).join('')
  const row = spaces + characters + spaces;
  console.log(row);
 
});
{
const numRows = 4;
const alphabet = 'ABCDEFG';
const length= alphabet.length;
Array(numRows).fill().forEach((_, i) => {
   const spaces= Array(numRows - 2 + i).fill(' ').join('')
   const characters=  Array(length - 2 * i).fill().map((_, j) =>{ return alphabet[j]}).join('')
   const rowreverse = spaces + characters + spaces;
   console.log(rowreverse);
});
}

