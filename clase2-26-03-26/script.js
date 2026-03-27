const productos = [
    { id: 1, nombre: "Teclado", precio: 15000 },
    { id: 2, nombre: "Mouse", precio: 8000 },
    { id: 3, nombre: "Monitor", precio: 120000 },
    { id: 4, nombre: "Auriculares", precio: 25000 },
    { id: 5, nombre: "Parlante", precio: 30000 },
    { id: 6, nombre: "Televisor", precio: 99000 },
    { id: 7, nombre: "Batidora", precio: 9888888 },
    { id: 8, nombre: "Huevo Frito", precio: 1 }
];

const contenedorProductos = document.getElementById("productos");
const buscador = document.getElementById("buscador");

function renderizarProductos(lista) {
    if (lista.length === 0){
        contenedorProductos.innerHTML = `<p class="mensaje">No se encontraron productos</p>`;
        return;
    }

    const productosHTML = lista.map((producto) => {
        return `
        <article class="producto">
            <p><strong>ID:</strong> ${producto.id}</p>
            <h2>${producto.nombre}</h2>
            <p><strong>Precio:</strong> $${producto.precio}</p>
        </article>
        `;
    }).join("");

    contenedorProductos.innerHTML = productosHTML;
}

// aca mostrar tds al inicio
renderizarProductos(productos);

// buscador
buscador.addEventListener("input", function(){
    const textoBuscado = buscador.value.toLowerCase();

    const productosFiltrados = productos.filter((producto) => {
        return (
            producto.nombre.toLowerCase().includes(textoBuscado) ||
            producto.id.toString().includes(textoBuscado) ||
            producto.precio.toString().includes(textoBuscado)
        );
    });

    renderizarProductos(productosFiltrados);
});