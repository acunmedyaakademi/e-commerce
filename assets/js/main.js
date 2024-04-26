//main.js
import { productAdd } from "./productAdd.js";
import { renderAdminTable } from "./admin.js";












// const productBtn = document.querySelector('#product-btn');
// const productName = document.querySelector('.product-name');
// const productPieces = document.querySelector('.product-pieces');
// const titleInput = document.querySelector('#title');
// const piecesInput = document.querySelector('#pieces');
// const productDiv = document.querySelector('.product');

// // Kaydedilen ürünleri localStorage'dan al
// const savedProducts = JSON.parse(localStorage.getItem('products')) || [];

// // Kaydedilen ürünleri ekrana yükle
// for (const product of savedProducts) {
//     productDiv.innerHTML += `
//       <p>Ürün Adı: <span>${product.title}</span></p>
//       <p>Ürün Adedi: <span>${product.pieces}</span></p>
//       <button>Sil</button>
//     `;

// }


// // Ürün ekleme fonksiyonu
// function productAdd() {
//     const title = titleInput.value;
//     const pieces = piecesInput.value

//     // Giriş alanlarının boş olup olmadığını kontrol et
//     if (title === '' || pieces === '') {
//         alert('Lütfen ürün adı ve adetini girin.');
//         return; // Fonksiyondan çık
//     }

//     // Yeni ürün objesini oluştur
//     const newProduct = { title, pieces };

//     // Eklenen ürünü localStorage'a kaydet
//     savedProducts.push(newProduct);
//     localStorage.setItem('products', JSON.stringify(savedProducts));

//     // Eklenen ürünü ekrana göster
//     productDiv.innerHTML += `
//         <p>Ürün Adı: <span>${title}</span></p>
//         <p>Ürün Adedi: <span>${pieces}</span></p>
//         <button onclick="removeProduct(event)">Sil</button>
//     `;
// }

// // Ürünü silme fonksiyonu
// function removeProduct(event) {
//     // Sil butonuna tıklanan ürünü bul
//     const productToRemove = event.target.previousElementSibling.previousElementSibling.querySelector('span').textContent;

//     // Silinecek ürünü localStorage'dan ve ekrandan kaldır
//     savedProducts.splice(savedProducts.findIndex(product => product.title === productToRemove), 1);
//     localStorage.setItem('products', JSON.stringify(savedProducts));
//     event.target.parentElement.remove();
// }

// // Ürün ekleme butonuna tıklama olayı ekle
// productBtn.addEventListener('click', productAdd);
