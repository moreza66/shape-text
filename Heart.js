// 15. Heart

//  ***   ***
// ***** *****
// ***********
//  *********
//   *******
//    *****
//     ***
//      *
function createHeartRow(rowNum, totalRows) {
    if (rowNum < 0) {
      return '';
    }
  
    const starsCount = 2 * rowNum + 3;
    const spacesCount = (totalRows - starsCount) / 2;
  
    const spaces = ' '.repeat(spacesCount);
    const stars = '*'.repeat(starsCount);
  
    return spaces + stars + spaces + createHeartRow(rowNum - 1, totalRows);
  }
  
  function printHeartPattern(totalRows) {
    const heartArt = createHeartRow(totalRows - 1, totalRows);
    console.log(heartArt);
  }
  
  printHeartPattern(8);
  
