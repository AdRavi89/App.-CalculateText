function hitungStatistik() {
  var inputText = document.getElementById('inputText').value;

  var jumlahHuruf = inputText.replace(/[^a-zA-Z]/g, '').length;
  var jumlahKata = inputText.split(/\s+/).filter(function(word) {
    return word.length > 0;
  }).length;
  var jumlahAngka = inputText.replace(/\D/g, '').length;
  var jumlahTandaBaca = inputText.replace(/[a-zA-Z0-9\s]/g, '').length;
  var jumlahSpasi = inputText.replace(/[^ ]/g, '').length;
  var jumlahEnter = (inputText.match(/\n/g) || []).length;

  document.getElementById('jumlahHuruf').textContent = jumlahHuruf;
  document.getElementById('jumlahKata').textContent = jumlahKata;
  document.getElementById('jumlahAngka').textContent = jumlahAngka;
  document.getElementById('jumlahTandaBaca').textContent = jumlahTandaBaca;
  document.getElementById('jumlahSpasi').textContent = jumlahSpasi;
  document.getElementById('jumlahEnter').textContent = jumlahEnter;
}

function clearText() {
  document.getElementById('inputText').value = "";
  // Clear the statistics as well
  document.getElementById('jumlahHuruf').textContent = '0';
  document.getElementById('jumlahKata').textContent = '0';
  document.getElementById('jumlahAngka').textContent = '0';
  document.getElementById('jumlahTandaBaca').textContent = '0';
  document.getElementById('jumlahSpasi').textContent = '0';
  document.getElementById('jumlahEnter').textContent = '0';
}
