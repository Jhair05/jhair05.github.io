document.addEventListener('DOMContentLoaded', function () {

    const email = document.querySelector('#email');
    const whats = document.querySelector('#whatsapp');
    const quiosco = document.querySelector('#quiosco');
    const menu = document.querySelector('#menu');

    email.addEventListener('click', enviarEmail);
    whats.addEventListener('click', enviarWhats);
    quiosco.addEventListener('click', linkQuiosco);
    menu.addEventListener('click', linkMenu);


    function enviarEmail() {
        window.location.href = 'mailto:jhair_vkgarcia@outlook.com';
    }

    function enviarWhats() {
        const telefono = '522294913849'; // Número de teléfono con el código de país
        const mensaje = 'Hola';
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank'); // Abre en una nueva pestaña
    }

    function linkQuiosco() {
        const url = 'https://quiosco-la-heladera.vercel.app/order/helados';
        window.open(url, '_blank');
    }

    function linkMenu() {
        const url = 'https://menu-la-heladera.netlify.app/';
        window.open(url, '_blank');
    }

});
