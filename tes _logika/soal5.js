function generatePattern(N) {
  if (N % 2 === 0) {
    return "N harus bilangan ganjil";
  }

  const pattern = [];
  let k = 0;
  for (let i = 0; i < N; i++) {
    const row = [];
    for (let j = 0; j < N; j++) {
      if (i == 0 || i == N - 1) {
        row.push("X");
      } else {
        if (j == 0 || j == N - 1 || j == N - 2) {
          row.push("X");
        } else {
          row.push("0");
        }
      }
    }
    if (i == 0 || i == N - 1 || i == 1) {
      null;
    } else {
      row[row.length - (k + 1)] = "X";
      row[row.length - 2] = "0";
    }
    k = k + 1;
    pattern.push(row.join(""));
  }

  return pattern.join("\n");
}

console.log(generatePattern(5));
console.log(generatePattern(3));
console.log(generatePattern(7));
console.log(generatePattern(2));
