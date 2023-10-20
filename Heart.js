// 15. Heart

//  ***   ***
// ***** *****
// ***********
//  *********
//   *******
//    *****
//     ***
//      *
const numberOfRows = 8;
let heartArt = '';

for (let i = 0; i < numberOfRows; i++) {
  heartArt += createHeartRow(i) + '\n';
}

function createHeartRow(rowNum) {
  if (rowNum === 0) {
    const stars = '*'.repeat(3);
    return ' ' + stars + '   ' + stars + ' ';
  } else if (rowNum === 1) {
    const stars = '*'.repeat(5);
    return stars + ' ' + stars;
  } else {
    const spaces = ' '.repeat(rowNum - 2);
    const stars = '*'.repeat(2 * rowNum + 7 - 4 * rowNum + 8);
    return spaces + stars + spaces;
  }
}

console.log(heartArt);
