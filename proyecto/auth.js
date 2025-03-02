// Registro de usuario
document.getElementById('registroForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username && password) {
        localStorage.setItem('usuario', JSON.stringify({
            username: username,
            avatar: 'https://images.pexels.com/photos/8019615/pexels-photo-8019615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }));
        window.location.href = 'comentarios.html';
    }
});

// Verificación de sesión
window.addEventListener('load', function() {
    if(window.location.pathname.includes('comentarios.html')) {
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        if(!usuario) window.location.href = 'registro.html';
        
        document.getElementById('userName').textContent = usuario.username;
        document.getElementById('userAvatar').src = usuario.avatar;
    }
});

// Cerrar sesión
function cerrarSesion() {
    localStorage.removeItem('usuario');
    window.location.href = 'registro.html';
}