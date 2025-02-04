// Belajar export dan import di javascript
// export dan import adalah fitur baru di javascript yang digunakan untuk mengelola kode javascript yang besar

// bisa mengombinasikan export default dan export
export default function default_export() {
    console.log("Ini adalah export default");
}

export function export_named() {
    console.log("Ini adalah export named");
}


// Ada 2 jenis export yaitu export default dan export
export const num2 = 20;
export const ste2 = 'me aura'; // ini adalah jenis export pertama

// export default variabel; // ini adalah jenis export kedua
const num1 = 10;
const ste1 = 'me aura';

export {num1, ste1}; 

// mengexport function
const nama = 'me aura';
const kelas = 'XI DKV-2';

function biodata(nama) {
    console.log(`Nama saya adalah ${nama}`);
}

export {nama, kelas, biodata};