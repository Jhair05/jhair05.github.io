document.addEventListener('DOMContentLoaded', function () {

    const email = document.querySelector('#email');
    const whats = document.querySelector('#whatsapp');

    email.addEventListener('click', enviarEmail);
    whats.addEventListener('click', enviarWhats);


    function enviarEmail() {
        window.location.href = 'mailto:jhair_vkgarcia@outlook.com';
    }

    function enviarWhats() {
        const telefono = '522294913849'; // Número de teléfono con el código de país
        const mensaje = 'Hola hermoso, necesito de tu ayuda';
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank'); // Abre en una nueva pestaña
    }

});