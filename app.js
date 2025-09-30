function generarContrasena() {
    var contrasena = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_=+';
    
    var inputContrasena = '';

    var longitud  = Math.floor(Math.random() * (16 - 12 + 1)) + 12;

    for (let i = 0; i < longitud; i++) {
        inputContrasena += contrasena.charAt(Math.floor(Math.random() * contrasena.length));
    }

    document.getElementById('contrasena').value = inputContrasena;
}