console.log(
  "Saya Aura sedang belajar javascript di website Dikoding, Entah aku berharap bisa mempelajari js di tahun 2025 ini, semoga saja bisa dan aku punya keinginan suatu saat aku bisa mengganti laptop ini dengan laptop yang lebih baik lagi, amin."
);
console.log();
// Ini adalah komentar
/* ini adalah komentar yang digunakan tidak sebaris
contohnya seperti ini */

/*  Operator perbandingan dalam JavaScript */

let a = 5;
let b = 10;
let c = 5;
let d = "5";
let e = 10;

// < (kurang dari)
console.log(a < b); // Output: true, karena 5 < 10

// > (lebih besar dari)
console.log(a > b); // Output: false, karena 5 tidak lebih besar dari 10

// <= (kurang dari atau sama dengan)
console.log(a <= b); // Output: true, karena 5 <= 10

// >= (lebih besar atau sama dengan)
console.log(a >= b); // Output: false, karena 5 tidak lebih besar atau sama dengan 10

// == (sama dengan, tanpa memeriksa tipe data)
console.log(a == c); // Output: true, karena 5 sama dengan 5

// === (sama dengan, memeriksa tipe data dan nilai)
console.log(a === d); // Output: false, karena tipe data 5 (number) !== "5" (string)

// != (tidak sama dengan)
console.log(a != b); // Output: true, karena 5 tidak sama dengan 10

// !== (tidak sama dengan, memeriksa tipe data dan nilai)
console.log(a !== d); // Output: true, karena tipe data 5 (number) !== "5" (string)

/* Operator Aritmatika dalam JavaScript */

// Variabel
let nama = "Aura"; // variabel tipe baru
var umur = 12; // variabel tipe lama
const sekolah = "Smk Kristen"; // variabel yang tidak dapat di perbarui
nama = "Bayu"; // Variabel nama DIperbarui

console.log(`nama aku adalah ${nama}, dan umur aku ${umur}. serta aku bersekolah di ${sekolah}.`);

/* Type Data */ console.log();

// Tipe data
const currenYear = new Date().getFullYear();
console.log(`Hari ini adalah tahun ${currenYear}`); // INI tipe String

const hasil = 50 / 0; // INI tipe Number
console.log(hasil);

const perbedaan = 10 > 5; // INI tipe boolean, True atau False
console.log(perbedaan);

// Mengubah nilai tipe data
let strNumber = 123;
let strString = String(strNumber);

/* FUNCTION */ console.log();

// Function dan Fungsi sederhanya
function addNumber(a, b) {
  return a + b;
}

const hasilNumber = addNumber(10, 10);
console.log(hasilNumber);

// Penmanggilan function
function hasilPerhitungan(kalkulator) {
  const jumlahPerhitungan = ((10 + 5) * kalkulator) / 10;

  console.log(`hasil perhitungan : ${jumlahPerhitungan}`);
}

const hasilSemuanya = 100;
hasilPerhitungan(hasilSemuanya);

// Arrow function
const contohPerhitungan = (kalkulatorcontoh) => {
  // Menggunakan fungsi dalam variabel
  return (9 / 1) * kalkulatorcontoh + 10;
};

const hasilContoh = 1000;
const hasilContohPerhitungan = contohPerhitungan(hasilContoh);
console.log(`adalah ${hasilContohPerhitungan}`);

const namaSaya = (nama) => `Nama saya adalah ${nama}`; //
console.log(namaSaya("Aura"));

// function belajar
function salam(sekolah = "SMK KRISTEN", nama) {
  return `Hallo ${nama}, Selamat datang di ${sekolah}`;
}

const salamAura = salam("SDN 1", "Aura");
const salamBayu = salam("Bayu");

console.log(salamAura);
console.log(salamBayu);

/* Object */ console.log();

// Membuat Object
const user = {
  me: "Aura",
  sekolahKita: "SMK KRISTEN",
  umur: 12,
};

console.log(user);
// Mengakses Properti di Object
console.log(user.me); // Mengakses menggunakan dot
console.log(user["sekolahKita"]); // Mengakses menggunakan square bracket
const { me, sekolahKita } = user; // Mengakses menggunakan destructuring 1#
console.log(me, sekolahKita);

user.umur = 13; // Mengubah nilai properti di Object
console.log(user.umur);

delete user.me; // Menghapus properti di Object
console.log(user);

/* Array */ console.log();

// Membuat Array
const users = new Array(); // Membuat Array kosong
console.log(users);

const foo = Array.from("foo"); // Membuat Array from
console.log(foo);
const arreyFrom = new Array("Aura", "Bayu", "Deni");
const customer = Array.from(arreyFrom); // Memperbarui Array from
console.log(customer);

const fruits = ["apple", "banana", "mango", "orange"]; // Membuat Arrray literal
console.log(fruits); // sangat direkomendasikan menggunakan array literal karena simple dan mudah

const myArray = [20, 11, 120]; // Mengakses element Array
console.log(myArray[1]); // output : 11
myArray[1] = 100; // Mengubah element Array
console.log(myArray[1]); // output : 100
myArray.slice(1, 1); // Menghapus element Array
console.log(myArray); // output : [20, 120]
myArray.reverse(); // Membalikkan element Array
console.log(myArray); // output : [120, 20]

/* menstrukturkan berdasarkan Map */ console.log();

const map = new Map(); // Membuat map
const productMap = new Map([
  ["chup", 100],
  ["mouse", 200],
  ["keyboard", 450],
]);
console.log(productMap);

map.set("Aura", "Bayu"); // Mentimpan nilai Map menggunakan medthod 'set'
console.log(map);
console.log(map.get("Aura")); // Mengambil nilai Map menggunakan medthod 'get'

/* Memstrukturkan berdasarkan Set */ console.log();

const mySet = new Set([1, 2, 3, 4, 5]); // Membuat Set
console.log(mySet);

const set = new Set();
set.add("Aura"); // Menambahkan nilai Set menggunakan medthod 'add'
set.add("Bayu");
console.log(set);

// Mengakses nilai set
for (const item of set) {
  console.log(item); // cara pertama menggunakan looping
}

set.forEach((value) => console.log(value)); // cara kedua menggunakan forEach

// Menghapus nilai set
const setNew = new Set();
setNew.add(1);
setNew.add(2);
setNew.add(3);
setNew.delete(2); // Menghapus nilai Set menggunakan medthod 'delete'

console.log(setNew);

/* rest operator */ console.log();

function myFunc(number, ...args) {
  console.log("adalah", number);
  console.log("adalah", args);
  console.log(args.length);
}

myFunc("one", "two", "three");

/* if statement */ console.log();

const gajian = 20; // If statement akan mengeksekusi blok jika kondisi terpenuhi (true). Jika kondisi belum terpenuhi (false), kode tidak akan dieksekusi. Perhatikan contoh berikut ini.

console.log("Saya berjalan-jalan di MAL");
if (gajian > 10) {
  // Nilai gajian adalah true
  console.log("Lalu makan di KFC");
} else {
  // dengan else akan menampilkan tidak true
  // Nilai gajian adalah false
  console.log("Lalu makan di warteg");
}

console.log("Pulang ke rumah");

/* else if statement */ console.log();

const score = 80;
if (90 < score) {
  console.log("Selamat, Anda mendapatkan nilai A"); // false
} else if (score > 70) {
  console.log("Selamat, Anda mendapatkan nilai B"); // true
} else {
  console.log("Anda mendapatkan nilai C"); // false
}

/* Tahukah Anda bahwa if statement bukanlah satu-satunya control flow yang ada di bahasa pemrograman. Selain if statement, ada juga yang namanya switch statement. */

/* switch statement */ console.log();

const fruit = "jeruk";
switch (
  fruit // contoh penggunaan switch pada javascript
) {
  case "semangka":
    console.log("saya suka semangka");
    break;
  case "apel":
    console.log("saya suka apel");
    break;
  case "mangga":
    console.log("saya suka mangga");
    break;
  default:
    console.log("saya tidak suka buah");
}

/* Perbedaan switch case dan if/else terdapat pada penulisan sintaks yang lebih readable dan beberapa kasus penggunaan switch lebih efisien. Perhatikan contoh pengecekan kondisi dengan if/else berikut ini. */

const hari = new Date().getDay(); // ini if else

if (hari === 0) {
  console.log("Hari ini adalah Minggu");
} else if (hari === 1) {
  console.log("Hari ini adalah Senin");
} else if (hari === 2) {
  console.log("Hari ini adalah Selasa");
} else if (hari === 3) {
  console.log("Hari ini adalah Rabu");
} else if (hari === 4) {
  console.log("Hari ini adalah Kamis");
} else if (hari === 5) {
  console.log("Hari ini adalah Jumat");
} else if (hari === 6) {
  console.log("Hari ini adalah Sabtu");
} else {
  console.log("Hari tidak valid");
}

const day = new Date().getDay(); // ini switch case

switch (day) {
  case 0:
    console.log("Hari ini adalah Minggu");
    break;
  case 1:
    console.log("Hari ini adalah Senin");
    break;
  case 2:
    console.log("Hari ini adalah Selasa");
    break;
  case 3:
    console.log("Hari ini adalah Rabu");
    break;
  case 4:
    console.log("Hari ini adalah Kamis");
    break;
  case 5:
    console.log("Hari ini adalah Jumat");
    break;
  case 6:
    console.log("Hari ini adalah Sabtu");
    break;
  default:
    console.log("Hari tidak valid");
}

/* Looping */ console.log();

for (let a = 0; a < 5; a++) {
  console.log(`Perfitungan ke-${a}`);
} // Ini adalah contoh penggunaan for loop

console.log();

for (let i = 0; i < 5; i++) {
  console.log("AURA AUVAROSE");
} // Penggunaan for loop dengan menampilkan string

console.log();

let menu = 0;

while (menu < 5) {
  console.log(`nomer ${menu}`);
  menu++; // jika tidak ada increment maka akan terjadi infinite loop  
} // contoh pengulangan while loop

/* Error Handling */ console.log();

let beli = 20;
let jual = 80;

if (beli > jual) {
  throw new Error("harga beli tidak boleh lebih besar dari harga jual");
}

function checkGrades(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (typeof grades[i] !== 'number') {
      throw new Error('Invalid input. Please provide an array of numbers.');
    }
 
    const grade = grades[i];
    let predicate;
 
    if (grade >= 90) {
      predicate = 'A';
      console.log("ini adalah A")
    } else if (grade >= 80) {
      predicate = 'B';
    } else if (grade >= 70) {
      predicate = 'C';
    } else if (grade >= 60) {
      predicate = 'D';
    } else {
      predicate = 'E';
    }
 
    console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
  }
}
 
try {
  const studentGrades = [95, 85, 65, 80, 70];
  checkGrades(studentGrades);
} catch (e) {
  console.error(e);
} 

/* Modularisasi */ console.log()

// Importing module
import variabel from "./EkportDikoding.mjs"; // import module dari file DIkoding.mjs
variabel();

import { num1, ste1 } from "./EkportDikoding.mjs"; // import module dari file DIkoding.mjs
console.log(num1);
console.log(ste1);

import defauly_export, { export_named } from "./EkportDikoding.mjs"; // import module dari file DIkoding.mjs
defauly_export();
export_named();

import { biodata } from "./EkportDikoding.mjs"; // import module dari file DIkoding.mjs
console.log(biodata.nama);
console.log(biodata.kelas);
