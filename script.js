function tampilkanGrade() {
  var nilai = parseFloat(document.getElementById("inputNilai").value);

  if (!isNaN(nilai)) {
    var grade;
    if (nilai >= 90) {
      grade = " A";
    } else if (nilai >= 80) {
      grade = " B";
    } else if (nilai >= 70) {
      grade = " C";
    } else if (nilai >= 60) {
      grade = " D";
    } else {
      grade = " E";
    }

    document.getElementById("hasilGrade").innerHTML = "Grade Anda: " + grade;
  } else {
    document.getElementById("hasilGrade").innerHTML = "Input yang Anda masukkan bukan angka.";
  }
}

function hitung() {
  var operasi = document.getElementById("pilihanOperasi").value;
  var angka1 = parseFloat(document.getElementById("angka1").value);
  var angka2 = parseFloat(document.getElementById("angka2").value);
  var hasil = 0;

  switch (operasi) {
    case "tambah":
      hasil = angka1 + angka2;
      break;
    case "kurang":
      hasil = angka1 - angka2;
      break;
    case "kali":
      hasil = angka1 * angka2;
      break;
    case "bagi":
      if (angka2 !== 0) {
        hasil = angka1 / angka2;
      } else {
        document.getElementById("hasilPerhitungan").innerHTML = "Tidak bisa membagi dengan nol.";
        return;
      }
      break;
    default:
      document.getElementById("hasilPerhitungan").innerHTML = "Operasi tidak valid.";
      return;
  }

  document.getElementById("hasilPerhitungan").innerHTML = "Hasil: " + hasil;
}

var hasilIterasiElement = document.getElementById("hasilIterasi");

for (var i = 1; i <= 10; i++) {
  var listItem = document.createElement("li");
  listItem.textContent = "Nomor ke-" + i;
  hasilIterasiElement.appendChild(listItem);
}

var hasilIterasiWhileElement = document.getElementById("hasilIterasiWhile");
var i = 1;

while (i <= 5) {
  var listItem = document.createElement("li");
  listItem.textContent = "Mantan ke-" + i;
  hasilIterasiWhileElement.appendChild(listItem);
  i++;
}
