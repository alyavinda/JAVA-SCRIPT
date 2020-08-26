// document.write("<h1>help</h1>");
// document.write("<h2 style='color:red;'>help</h2>")
// kalau disini bisa tambah tag css



//MENAMPILAKAN OUTPUT DENGAN JAVA SCRIPT ;]
console.log("rpl");

document.write("<h1>BIODATA :</h1>");
document.write("<hr>");
document.write("<h3>Nama    : Alyavinda Aufarra</h3>");
document.write("<h3>Jurusan : Rekayasa Perangkat Lunak</h3>");

document.write("<hr>");
// cara kedua

var nama = "alya";
var jurusan = " Rekaya Perangkat Lunak"
document.write(`
<table>
 <tr>
   <td>BIODATA</td>
   </tr>
<tr>
  <td>Nama</td>
  <td>:</td>
   <td> ` + nama + `</td> 
  </tr>
</table>


<table>
  <tr>
   <td>jurusan</td>
   <td>:</td>
   <td>Rekayasa Perangkat Lunak</td>
   </tr>
</table>`);

document.write("<hr>");
//VARIABEL
// var nama = "Alya";
// var jurusan = "Rekayasa Perangkat Lunak"

// document.write(nama);

var nilai_a = 10;
var nilai_b = 20;

var penjumlahan = nilai_a + nilai_b;
document.write("<p>hasil penjumlahannya :" + penjumlahan + "</p>");

var penjumlahan = nilai_a - nilai_b;

document.write("<p>hasil penjumlahannya :" + penjumlahan + "</p>");

var penjumlahan = nilai_a * nilai_b;

document.write("<p>hasil penjumlahannya :" + penjumlahan + "</p>");
var penjumlahan = nilai_a / nilai_b;

document.write("<p>hasil penjumlahannya :" + penjumlahan + "</p>");