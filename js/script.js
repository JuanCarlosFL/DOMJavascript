import hamburguerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import scrollTopButton from "./boton_scroll.js";
import { shortcuts, moveBall } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import darkTheme from "./tema_oscuro.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {

    hamburguerMenu('.panel-btn', '.panel', '.menu a');
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm('../assests/alarma.mp3', '#activar-alarma', '#desactivar-alarma');

    scrollTopButton(".scroll-top-btn");

});
countdown('countdown', "Dec 26, 2020 12:00:00", "Feliz Cumpleaños 🤓");

d.addEventListener('keydown', (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})

darkTheme('.dark-theme-button', 'dark-mode');