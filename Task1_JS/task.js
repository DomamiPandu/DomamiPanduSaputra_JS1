// Penggunaan if
let y = 20;
if (y == 20) {
  document.write("Variabel y adalah berisi nilai ");
}

// Penggunaan else
let nilai = 80;
if (nilai >= 60) {
  document.write("Selamat Kamu lulus!");
} else {
  document.write("Maaf kamu harus belajar!");
}

// Penggunaan nested if
Ipk=prompt("Masukan IPK")

if (Ipk>=3.0 && Ipk<=4.0){
    if (Ipk>3.5){
        document.write("IPK kamu sangat bagus")
     }else {
        document.write("IPK kamu bagus")
      }
}else if (Ipk<3.0){
    document.write("Tingkatkan lagi IPK mu ya")
}else {
    document.write("IPK maksimal hanya 4.0")
}

// Penggunaan switch case
let z = 1;
switch (z) {
  case 1:
    console.log("Kamu lolos");
    break;
  case 2:
    console.log("Silahkan tingkatkan lagi");
  default:
    console.log("Maaf kamu belum lolos");
}

// Penggunaan for statement
for (let c = 0; c <= 20; c++) {
   console.log(c)
}

// Penggunaan while
var b=0;
while (b<5)
{
   console.log("Saya sedang belajar JavaScript");
   b++;
}

// Penggunaan do while
a = 0;
do {
    console.log(a);
    a++;
} while (a <= 100);

// Penggunaan function
(function (nama) {
   console.log('hello ' + nama);
 })('Domami');