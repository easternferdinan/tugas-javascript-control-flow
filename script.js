let input = prompt("Masukan nilai anda");

if (input >= 90 && input <= 100) {
    alert("Nilai anda A");
} else if (input >= 70) {
    alert("Nilai anda B");
} else if (input >= 50) {
    alert("Nilai anda C");
} else if (input >= 30) {
    alert("Nilai anda D");
} else if (input >= 0) {
    alert("Nilai anda E");
} else {
    alert("Nilai anda tidak valid");
}