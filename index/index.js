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

const divFundas = document.createElement("div");
cuerpo.appendChild (divfundas)
let case = `ID: ${fundas.id} - Nombre: ${fundas.nombre} - Precio: $${fundas.precio}`
const texto = document.createElement ('h4');
texto.innerHTML = case;
divfundas.appendChild (h4);
