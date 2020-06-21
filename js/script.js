import hamburguerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import scrollTopButton from "./boton_scroll.js";
import { shortcuts, moveBall } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {

    hamburguerMenu('.panel-btn', '.panel', '.menu a');
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm('../assests/alarma.mp3', '#activar-alarma', '#desactivar-alarma');
    countdown('countdown', "Dec 26, 2020 12:00:00", "Feliz Cumpleaños 🤓");

    scrollTopButton(".scroll-top-btn");
    responsiveMedia('youtube', '(min-width: 1024px)', `<a href="https://www.youtube.com/embed/tAGnKpE4NCI" target="_blank" rel="noopener">Ver video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/tAGnKpE4NCI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia('gmaps', '(min-width: 1024px)', `<a href="https://goo.gl/maps/g7yFhX3B6DhhEjQs6" target="_blank" rel="noopener">Ver video</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.0994765955966!2d-4.421504648879742!3d36.72017207980117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f79511cea98d%3A0xfcc3c279b06f19fa!2sCatedral%20de%20la%20Encarnaci%C3%B3n%20de%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1592690272071!5m2!1ses!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);
    responsiveTester('responsive-tester');
});

d.addEventListener('keydown', (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})

darkTheme('.dark-theme-button', 'dark-mode');