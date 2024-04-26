//admin.js
const adminTab = document.querySelector('#adminTag');
export const container = document.querySelector('.container');
adminTab.addEventListener('click', admin);
// import { handleSubmit } from "./productAdd.js";


export function admin() {
    renderAdminTable();
}

console.log(`Name:${nameValue}- piece:${pieceValue}- price:${priceValue}`)

// console.log();
export function renderAdminTable() {
    container.innerHTML =
        `
    <table>
        <tr>
            <th>Ürün Adı</th>
            <th>Ürün Fiyatı</th>
            <th>Ürün Adedi</th>
            <th>Kalan Adet</th>
            <th>Stok Durum</th>
        </tr>
        <tr>
            <td id="urunAdi">Product 1</td>
            <td id="urunFiyat">20 <span>TL</span> </td>
            <td id="urunAdedi">5</td>
            <td id="kalanAdet">4</td>
            <td id="stokTakip">Var/Yok</td>
        </tr>
    </table>
    `;
}


