//productAdd.js
const productAddDiv = document.querySelector("#productAdd");
export const container = document.querySelector('.container');
productAddDiv.addEventListener('click', productAdd);

export function productAdd() {
    renderProductAddForm();
}

export let urunlerDizi = []

function renderProductAddForm() {

    container.innerHTML =
        `
        <form id='addProductForm'>
            <label for="name">Name:</label>
            <input type="text" id="name" name='name' class="inputElement" placeholder="Ürün Adı..."><br>

            <label for="piece">Piece:</label>
            <input type="number" id="piece" name='piece' class="inputElement" placeholder="Ürün Adedi..."><br>

            <label for="price">Price:</label>
            <input type="number" id="price" name='price' class="inputElement" placeholder="Ürün Fiyatı..."><br>

            <button class="productBtn">ÜRÜN EKLE</button>
        </form>
    `;

    const addProductForm = document.querySelector('#addProductForm');
    addProductForm.addEventListener('submit', handleSubmit);

}

export function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData)

    const nameValue = formObj['name'];
    const pieceValue = formObj['piece']
    const priceValue = formObj['price']
    if (!nameValue || !pieceValue || !priceValue) {
        alert("Alanları Doldurunuz!")
    }
    else {
        if (JSON.parse(localStorage.getItem('products'))) {
            urunlerDizi = JSON.parse(localStorage.getItem('products'))
            urunlerDizi.push(formObj)
        }
        else {
            urunlerDizi.push(formObj)
        }
        localStorage.setItem('products', JSON.stringify(urunlerDizi));
    }
    e.target.reset()
}
