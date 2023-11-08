const opcion1 = document.getElementById('opcion1');
const opcion2 = document.querySelector('#opcion2');
const bloque = document.querySelector('#bloque');
const bloque2 = document.querySelector('#bloque2');
const audio = new Audio('lover-Song.mp3');

const imagem = document.querySelector('#imagem');
/*opcion2.addEventListener("mouseenter", () => {
    const randomX = Math.floor(Math.random() * 450) - 25;
    const randomY = Math.floor(Math.random() * 450) - 25;
    opcion2.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
*/


// Obtener las dimensiones de la ventana
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// Calcular las coordenadas máximas
const maxX = windowWidth - 1000; // 150 es el ancho del botón
const maxY = windowHeight - 600;  // 60 es la altura del botón

opcion2.addEventListener("mouseenter", () => {
    // Calcular una posición aleatoria dentro de los límites
    const randomX = Math.floor(Math.random() * (maxX * 1));
    const randomY = Math.floor(Math.random() * (maxY * 1));
    opcion2.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

opcion1.addEventListener('click',function(){
    bloque.style.display="none";
    document.body.style.backgroundImage = 'url("taylorBackground.jpg")';

    const nuevoDiv = document.createElement('div');
    nuevoDiv.style.display = 'flex';
    nuevoDiv.style.flexDirection = 'column';
    nuevoDiv.style.alignItems = 'center';
    nuevoDiv.style.justifyContent = 'center';
    nuevoDiv.style.height = '100vh'; // Asegura que el div ocupe toda la altura de la ventana
    
    const nuevaImagen = document.createElement('img');
    nuevaImagen.src = 'juntosEnEspejo.jpeg'; // Reemplaza 'tu_imagen.jpg' con la ruta correcta a tu imagen
    nuevaImagen.style.display = 'block';
    nuevaImagen.style.height = '220px';

    // Crear y configurar el elemento h1
    const nuevoH1 = document.createElement('h1');
    nuevoH1.style ="display: inline-block";
    nuevoH1.textContent = 'Te amo'; // Reemplaza 'Tu texto aquí' con el texto deseado
    nuevoH1.style.textAlign = 'center'; // Centrar el texto
    
    // Agregar la imagen y el h1 al body
    document.body.appendChild(nuevoDiv);
    nuevoDiv.appendChild(nuevaImagen);
    nuevoDiv.appendChild(nuevoH1);
    audio.play();
});