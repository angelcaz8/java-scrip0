// Cargar comentarios al iniciar
document.addEventListener('DOMContentLoaded', loadComments);

// Manejar envío de formulario
document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    
    if (commentText) {
        const newComment = {
            id: Date.now(),
            text: commentText,
            date: new Date().toLocaleString()
        };
        
        saveComment(newComment);
        addCommentToDOM(newComment);
        commentInput.value = '';
    }
});

// Guardar en localStorage
function saveComment(comment) {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Cargar comentarios almacenados
function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(comment => addCommentToDOM(comment));
}

// Crear elemento en el DOM
function addCommentToDOM(comment) {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.dataset.id = comment.id;

    commentDiv.innerHTML = `
        <p>${comment.text}</p>
        <small>${comment.date}</small>
        <button class="delete-btn">Eliminar</button>
    `;

    // Evento para eliminar comentario
    commentDiv.querySelector('.delete-btn').addEventListener('click', deleteComment);
    document.getElementById('commentsContainer').prepend(commentDiv);
}

// Eliminar comentario
function deleteComment(e) {
    const commentDiv = e.target.closest('.comment');
    const commentId = parseInt(commentDiv.dataset.id);
    
    // Actualizar localStorage
    const comments = JSON.parse(localStorage.getItem('comments'));
    const filteredComments = comments.filter(comment => comment.id !== commentId);
    localStorage.setItem('comments', JSON.stringify(filteredComments));
    
    // Eliminar del DOM
    commentDiv.remove();
}