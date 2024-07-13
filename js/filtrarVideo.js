import { conectaAPI } from "./conectaAPI.js";
import construyeCard from "./mostrarVideos.js";

async function filtrarVideo (evento) {

    evento.preventDefault();

    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await conectaAPI.buscarVideos(datosDeBusqueda);

    const lista = document.querySelector("[data-lista]");

    //desaparece los elementos de la página
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    //agrega los elementos de la búsqueda
    busqueda.forEach(video => lista.appendChild(construyeCard(video.titulo, video.descripcion, video.url, video.imagen)));

    if(busqueda.length==0) {
        lista.innerHTML=`<h2 class=mensaje__titulo>No fueron encontrados elementos para ${datosDeBusqueda}</h2>`
    }

    
    }
    
    const inputEle = document.getElementById('buscar');
    inputEle.addEventListener('keyup', function(e){
      var key = e.which || e.keyCode;
      if (key == 13) {
        filtrarVideo(e)
      }
    });

const boton = document.querySelector("[data-boton-busqueda]");

boton.addEventListener("click", evento => filtrarVideo(evento));