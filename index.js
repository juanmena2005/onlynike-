function guardarNombre() {
    const nombreIngresado = document.getElementById('nombreInput').value;
    sessionStorage.setItem('nombreGuardado', nombreIngresado);
    window.location.href = 'index.html';
}

const nombreGuardado = sessionStorage.getItem('nombreGuardado');
if (nombreGuardado) {
    document.getElementById('nombreGuardado').textContent = `Hola ${nombreGuardado}!`;
} else {
    document.getElementById('nombreGuardado').textContent = 'Hola usuario.';
}