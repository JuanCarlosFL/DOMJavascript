import hamburguerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import scrollTopButton from "./boton_scroll.js";

const d = document;

d.addEventListener('DOMContentLoaded', e => {

    hamburguerMenu('.panel-btn', '.panel', '.menu a');
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm('../assests/alarma.mp3', '#activar-alarma', '#desactivar-alarma');

    scrollTopButton(".scroll-top-btn");
});