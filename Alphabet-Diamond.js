const numRows = 5;
const alphabet = 'ABCDEFGHI';

Array(numRows).fill().forEach((_, i) => {
  const spaces= Array(numRows - i).fill(' ').join('')
  const stars= Array(2 * i + 1).fill().map((_, j) => { return alphabet[j] }).join('')
  const row = spaces + stars + spaces;
  console.log(row);
 
});
{
const numRows = 4;
const alphabet = 'ABCDEFG';
const length= alphabet.length;
Array(numRows).fill().forEach((_, i) => {
   const spaces= Array(numRows - 2 + i).fill(' ').join('')
   const stars=  Array(length - 2 * i).fill().map((_, j) =>{ return alphabet[j]}).join('')
   const rowreverse = spaces + stars + spaces;
   console.log(rowreverse);
});
}
