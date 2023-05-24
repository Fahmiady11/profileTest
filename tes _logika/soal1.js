function tampilkanKelipatan(n) {
  const output = [];
  let i = 1;

  while (output.length < n) {
    if (i % 3 === 0 && i % 7 === 0) {
      output.push("Z");
    } else if (i % 3 === 0 || i % 7 === 0) {
      output.push(i);
    }
    i++;
  }

  return output.join(", ");
}

const N = 13;
const hasil = tampilkanKelipatan(N);
console.log(hasil);
