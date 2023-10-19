const numRows = 5;
const alphabet = 'ABCDEFGHI';

Array(numRows).fill().forEach((_, i) => {
  const row = Array(numRows - i).fill(' ').join('') + Array(2 * i + 1).fill().map((_, j) => alphabet[j]).join('');
  console.log(row);
 
});
{
const numRows = 4;
const alphabet = 'ABCDEFG';
Array(numRows).fill().forEach((_, i) => {
  const rowrevers = Array(numRows - 2 + i).fill(' ').join('') + Array(7 - 2 * i).fill().map((_, j) => alphabet[j]).join('');
  console.log(rowrevers);
});
}
