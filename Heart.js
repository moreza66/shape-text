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

console.log(heartArt);
