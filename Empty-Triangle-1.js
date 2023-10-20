// Create a triangle 
// 07. Empty Triangle 1

//      *
//     **
//    * *
//   *  *
//  *   *
// ******
function generateEmptyTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = '';
    for (let j = 1; j <= rows; j++) {
      if (j === rows || i === rows || j === rows - i + 1) {
        row += '*';
      } else {
        row += ' ';
      }
    }
    console.log(row);
  }
}

generateEmptyTriangle(6);