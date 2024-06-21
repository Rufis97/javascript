const cuerpo = document.body;

cuerpo.style.backgroundColor = "turquoise";

document.getElementById('iphone').value = "Iphone";
document.getElementById('numero').value = 11;

const cabecera = document.getElementById('header');
const navegacion = document.createElement('navbar');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
cabecera.appendChild('navegacion');
navegacion.appendChild('nav');
nav.appendChild('ul');
navegacion.classname = 'navbar';

cabecera.style.backgroundColor = 'green';

const fundas = {
    id: 1,
    nombre: 'silicone case',
    precio: 10.000,
};

const products = [
    {id: 1, name: "Funda", price: 8000},
    {id: 2, name: "Blindado", price: 6000},
    {id: 3, name: "Cabezal", price: 18000},
    {id: 4, name: "Cable", price: 7000},
]

let cart = loadCartFromLocalStorage();
const errorCarritoDiv = document.getElementById('error_carrito');
errorCarritoDiv.style.color = 'blue';
function mandarMjeDeError(productId){
    errorCarritoDiv.innerHTML = `<p>Producto con ID: ${productId} no encontrado</p>`;    
}

const cartItem = cart.find(item => item.id === productId);

if (cartItem) {
    cartItem.quantity += quantity;
    cartItem.totalPrice = cartItem.quantity * product.price;
} else {
    cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        totalPrice: quantity * product.price
    });
}

function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar la lista de productos
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <p>${product.name} - $${product.price}</p>
            <button onclick="addToCart(${product.id}, 1)" class="button_grey">Agregar al Carrito</button>
        `;
        productList.appendChild(productDiv);
    });
}

function renderCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.innerHTML = `
            <p>ID: ${item.id}, Nombre: ${item.name}, Cantidad: ${item.quantity}, Precio Total: $${item.totalPrice}</p>
        `;
        cartDiv.appendChild(cartItemDiv);
    });
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();
    // addToCart(999, 1);
});