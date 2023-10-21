// Create a triangle 
// 07. Empty Triangle 1

//      *
//     **
//    * *
//   *  *
//  *   *
// ******
function generateEmptyTriangle(rows) {
  Array.from({ length: rows }, (_, i) => {
    const spaces = ' '.repeat(rows - i - 1);
    const stars = i === 0 || i === rows - 1 ? '*'.repeat(i + 1) : '*' + ' '.repeat(i - 1) + '*';
    const row = spaces + stars;
    console.log(row);
  });
}

generateEmptyTriangle(6);