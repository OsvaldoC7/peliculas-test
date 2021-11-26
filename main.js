let peliculas = [];

function eliminarElemento(event, nombre) {

    const pelicula = peliculas.find((pel) => pel[0] == nombre.id);
    
    var i = peliculas.indexOf(pelicula);
    i !== -1 && peliculas.splice(i, 1);
    
    document.getElementById('infoPeliculas').removeChild(nombre);
    document.getElementById('contador').textContent = `Peliculas: ${peliculas.length}`;
}

function editarElemento(event, nombre) {
    
    const nombrePelicula = document.getElementById('nombrePelicula');
    const generoPelicula = document.getElementById('generoPelicula');
    const descripcionPelicula = document.getElementById('descripcionPelicula');
    
    const pelicula = peliculas.find((pel) => pel[0] == nombre.id);

    var i = peliculas.indexOf(pelicula);
    i !== -1 && peliculas.splice(i, 1);

    nombrePelicula.value = pelicula[0];
    generoPelicula.value = pelicula[1]
    descripcionPelicula.value = pelicula[2];
    
    document.getElementById('infoPeliculas').removeChild(nombre);
    document.getElementById('contador').textContent = `Peliculas: ${peliculas.length}`;

}

(function load() {
    
    const form = document.getElementById('formulario');
    const tabla = document.getElementById('infoPeliculas');
    const botonAgregar = document.getElementById('botonAgregar');

    const templeteElemento = (nombre, genero, descripcion) => {
        let pelicula  = [nombre, genero, descripcion];
        peliculas.push(pelicula);
        
        return(`
            <td>${nombre}</td>
            <td>${genero}</td>
            <td><button class="btn btn-primary" onclick="editarElemento(event, ${nombre})">Editar</button></td>
            <td><button class="btn btn-danger" onclick="eliminarElemento(event, ${nombre})">Eliminar</button></td>
        `);
    }

    botonAgregar.addEventListener('click', (event) => {
        if(form.nombrePelicula.value != '' && form.generoPelicula.value != '' && form.descripcionPelicula.value != '') {

            const trTabla = document.createElement('tr');
            trTabla.id = form.nombrePelicula.value;
            trTabla.innerHTML = templeteElemento(form.nombrePelicula.value, form.generoPelicula.value, form.descripcionPelicula.value);
            
            tabla.appendChild(trTabla);

            form.reset();

            document.getElementById('contador').textContent = `Peliculas: ${peliculas.length}`;

        } else {
            alert('Complete los campos');
        }
    })

})()
