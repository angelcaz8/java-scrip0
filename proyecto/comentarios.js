function publicarComentario() {
    const texto = document.getElementById('commentInput').value.trim();
    if(!texto) return;

    const usuario = JSON.parse(localStorage.getItem('usuario'));
    const comentario = {
        usuario: usuario.username,
        avatar: usuario.avatar,
        texto: texto,
        fecha: new Date().toLocaleString()
    };

    guardarComentario(comentario);
    mostrarComentario(comentario);
    document.getElementById('commentInput').value = '';
}

function guardarComentario(comentario) {
    const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
    comentarios.unshift(comentario);
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
}

function mostrarComentario(comentario) {
    const div = document.createElement('div');
    div.className = 'comment';
    div.innerHTML = `
        <img src="${comentario.avatar}" class="avatar">
        <div>
            <div class="comment-header">
                <strong>${comentario.usuario}</strong>
                <small>${comentario.fecha}</small>
            </div>
            <p>${comentario.texto}</p>
        </div>
    `;
    document.getElementById('commentsContainer').prepend(div);
}

// Cargar comentarios al iniciar
window.addEventListener('load', function() {
    const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
    comentarios.forEach(mostrarComentario);
});