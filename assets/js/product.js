const container = document.querySelector('.container');
const productTag = document.querySelector('#product');
// import { clear } from "./clear.js";

productTag.addEventListener('click', products);

function products() {
    renderProducts();
    clear()
}

function renderProducts() {
    container.innerHTML =
        `
        <div class="container-product">
            <h1>ÜRÜN ADI</h1>
            <p>ürün fiyatı</p>
            <button class="productBtn">Ürünü Ekle</button>
        </div>
    `;
}
