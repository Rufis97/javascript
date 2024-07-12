cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';

for (const link of links) {
    const li = document.createElement('li');    
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`;
    ul.appendChild(li);
}

cabecera.style.backgroundColor = 'turquoise';

footer[0].appendChild(parrafoFooter);
parrafoFooter.innerHTML = 'Jotacell - Venta productos Apple ' ;

document.addEventListener('DOMContentLoaded', function() {
    const buttonToggle = document.getElementById('toggle-button');
    buttonToggle.className = 'button_grey';
    buttonToggle.addEventListener('click' , function() {
        cuerpo.classList.toggle('dark-mode');
        updateButtonText();
        setTimeout(()=>{
            cuerpo.classList.remove('dark-mode');
        },2000);
    })

    function updateButtonText() {
        if(cuerpo.classList.contains('dark-mode')) {
            buttonToggle.textContent = 'Cambiar a modo claro';
        } else {
            buttonToggle.textContent = 'Cambiar a modo oscuro';
        }
    }

    updateButtonText();
})