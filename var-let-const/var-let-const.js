// var = Function Scope (jgn digunakan lagi)
// let = Block Scope (prefer digunakan saat for())
// const = Block Scope, Tetapi Variabelnya wajib konstan, tidak bileh diubah nilainya

// Contoh Let
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// Contoh Const
const a = 15;
a = 20; // Pasti Error (Bisa mengubah isi konstanta asalkan tidak mengganti semuanya)