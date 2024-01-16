alert("hey listo")
function crearLibro() {
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const añoPublicacion = document.getElementById('añoPublicacion').value;

    fetch('/api/libros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ titulo, autor, añoPublicacion }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
     }
    

   function actualizarLibro() {
    const idLibro = document.getElementById('idLibro').value;
    const nuevoTitulo = document.getElementById('nuevoTitulo').value;
    const nuevoAutor = document.getElementById('nuevoAutor').value;
    const nuevoAñoPublicacion = document.getElementById('nuevoAñoPublicacion').value;

    fetch(`/api/libros/${idLibro}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ titulo: nuevoTitulo, autor: nuevoAutor, añoPublicacion: nuevoAñoPublicacion }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
     }


     function eliminarLibro() {
    const idLibroEliminar = document.getElementById('idLibroEliminar').value;

    fetch(`/api/libros/${idLibroEliminar}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }