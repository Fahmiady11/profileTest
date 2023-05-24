function cekBilanganCacahTerkecil(data) {
  const sortedData = data.sort((a, b) => a - b);
  const sortedfrist = sortedData[0];
  const sortedlast = sortedData[sortedData.length - 1];
  const temp = [];
  for (let i = sortedfrist; i < sortedlast; i++) {
    if (!sortedData.includes(i)) {
      temp.push(i);
    }
  }
  return temp[0];
}

console.log(cekBilanganCacahTerkecil([5, 2, 8, 4, 3, 10]));
console.log(cekBilanganCacahTerkecil([2, 3, 4, 6]));
console.log(cekBilanganCacahTerkecil([8, 6, 7, 12]));
