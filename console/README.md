# migrasi table dan sedder
System migrasi table masih dalam tahap manual
dan menggunkan CLI dari package *yargs*

- siapkan schema migrasi seprti contoh pada */console/migrastion/* dan masukkan pada folder tersebut
- Tambahkan perintah untuk migrasi tables pada directory */console/migration/index.js*
- siap file .json untuk insert default pada directory */console/sedder/JSON/*
- Tambahkan perintah khusus untuk sedder yang telah dibuat

misalkan tambah peritah sedder data users
pada file *console/index.js* tambah dan sesuaikan perintah CLI pada switch case