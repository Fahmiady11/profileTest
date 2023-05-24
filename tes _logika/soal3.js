function cekKataSandi(kataSandi) {
  const panjangMin = 8;
  const panjangMax = 32;

  if (kataSandi.length < panjangMin || kataSandi.length > panjangMax) {
    return "Kata sandi harus memiliki panjang antara 8 hingga 32 karakter";
  }

  const karakterAwal = kataSandi[0];

  if (/[0-9]/.test(karakterAwal)) {
    return "Karakter awal tidak boleh angka";
  }

  if (!/[0-9]/.test(kataSandi)) {
    return "Kata sandi harus memiliki setidaknya satu angka";
  }

  if (!/[A-Z]/.test(kataSandi) || !/[a-z]/.test(kataSandi)) {
    return "Kata sandi harus memiliki huruf kapital dan huruf kecil";
  }

  return "Kata sandi valid";
}

console.log(cekKataSandi("5andiwara"));
console.log(cekKataSandi("sandiwar4"));
console.log(cekKataSandi("Sandiwar4"));
console.log(cekKataSandi("sandiwara4"));
