// setup tanstack query
// install react via vite
// npm create vite@latest

// Tahap Pertama install npm i @tanstack/react-query
// kenapa QueryClient pakai keyword new, karna QueryClient merupakan class, dimana suatu class jika ingin menggunakan class tersebut harus menggunakan keyword new

// QueryClientProvider tidak perlu new, karna QueryClientProvider itu merupakan JSX Element

// tambahkan configurasi
// buat variable object client
// import { QueryClient } from '@tanstack/react-query';

// const client = new QueryClient();

// bungkus aplikasi kita dengan QueryClientProvider

// step step bikin request
// mutation
// siapin api nya. (fetch atau axios)
// bikin hooks nya.
// execute mutation nya

/* todo apps
buat api register
- buka file api pada feature auth/register
- buat request untuk submit registernya via axios
- buka file hooks di feature auth/register
- buat hooks unutk tanstack query melakukan proses request submit registernya
- Register tidak ada data yang perlu di invalidate skip proses invalidate dan optimistic
- lalu panggil hooksnya di halaman registerPage


buat api login
- buka file api pada feature auth/login
- buat request untuk submit loginnya via axios
- buka file hooks di feature auth/login
- buat hooks unutk tanstack query melakukan proses request submit loginnya
- simpan token ke dalam localstorage supaya kita dapat mengakses api todo.
- login tidak ada data yang perlu di invalidate skip proses invalidate dan optimistic
- lalu panggil hooksnya di halaman loginPage

mendapatkan todo
- buka file api pada feature todos
- buat request untuk get data todos
- buka file hooks di feature todos
- buat hooks untuk tanstack query melakukan proses request get data todos
- pastikan request header pada axios sudah menggunakan Authorization.
- lalu panggil hooksnya di halaman todosPage

membuat todo baru
- buka file api pada feature todos
- buat request untuk submit data todos via axios
- buka file hooks di feature todos
- buat hooks untuk tanstack query melakukan proses request submit data ke server
- pastikan request header pada axios sudah menggunakan Authorization.
- lalu panggil hooksnya di halaman todosPage
- todosPage mutate requestnya.
- invalidate cache untuk mendapatkan todos yang baru
- jika di butuhkan bisa gunakan optimistic update melalui method onMutate
*/
