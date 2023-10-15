const survey = new Survey.Model(json);
// Anda bisa menghapus baris di bawah ini jika Anda tidak menggunakan tema kustom
survey.applyTheme(themeJson);
survey.onComplete.add((sender, options) => {
  console.log(JSON.stringify(sender.data, null, 3));

  // Kirim data survei ke server
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://nine-q-default-rtdb.asia-southeast1.firebasedatabase.app/"); // URL server
  xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  xhr.onload = xhr.onerror = function () {
    if (xhr.status == 200) {
      // Tampilkan pesan "Berhasil" jika permintaan berhasil
      console.log("Berhasil menyimpan kuesioner.");
    } else {
      // Tampilkan pesan "Gagal" jika ada kesalahan
      console.error("Gagal menyimpan kuesioner.");
    }
  };
  xhr.send(JSON.stringify(sender.data));
});

$("#surveyElement").Survey({ model: survey });
