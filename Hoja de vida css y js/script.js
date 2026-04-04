document.addEventListener('DOMContentLoaded', function() {
    function mostrarAlerta(msg) {
        let alerta = document.querySelector('.alerta');
        if (!alerta) {
            alerta = document.createElement('div');
            alerta.className = 'alerta';
            document.body.appendChild(alerta);
        }
        alerta.textContent = msg;
        alerta.classList.add('mostrar');
        setTimeout(() => alerta.classList.remove('mostrar'), 2000);
    }

    const foto = document.querySelector('td:first-child img');
    if (foto) {
        foto.addEventListener('click', () => {
            mostrarAlerta('📸 Foto de perfil');
        });
    }

    document.querySelectorAll('li').forEach(li => {
        li.addEventListener('mouseenter', () => {
            mostrarAlerta(`💡 ${li.textContent}`);
        });
    });

    const tabla = document.querySelector('table');
    let timeout;

    window.addEventListener('scroll', () => {
        tabla.classList.add('moviendo');
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            tabla.classList.remove('moviendo');
        }, 300);
    });

    window.addEventListener('wheel', () => {
        tabla.classList.add('moviendo');
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            tabla.classList.remove('moviendo');
        }, 300);
    });

    mostrarAlerta('👋 ¡Bienvenido!');
});