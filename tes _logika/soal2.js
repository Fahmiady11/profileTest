function cariKata(text) {
  const kataKunci = ["sang gajah", "serigala", "harimau"];
  const hasilPencarian = [];

  kataKunci.forEach((kata) => {
    const regex = new RegExp(kata, "gi");
    const jumlahKata = (text.match(regex) || []).length;

    for (let i = 0; i < jumlahKata; i++) {
      hasilPencarian.push(kata);
    }
  });

  return hasilPencarian.join(" - ");
}

const teks =
  "Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala bernama DoeSang. Gajah sering dibela oleh serigala ketika harimau mendekati gajah.";
const hasil = cariKata(teks);
console.log(hasil);
