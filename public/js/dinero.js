
var porcentaje_anterior = 10000;
window.addEventListener('scroll', function() {
    var el = document.getElementById('dinero-celular');
    var porcentaje = el.getAttribute("parallax-progress") || "0%";
    const nuevoPorcentaje = parseInt(porcentaje.substring(0, 2));    
    if(Math.abs(porcentaje_anterior - nuevoPorcentaje) > 4){
        porcentaje_anterior = nuevoPorcentaje;
        if(nuevoPorcentaje > 0){
            var decimales = Math.floor(Math.random() * 10) * 10;
            const triplePorcentaje = nuevoPorcentaje * 3;
            el.innerHTML = "$ " + triplePorcentaje + "." + decimales;
        }    
    }  
    
    var elementoLogo = document.getElementById('logoHeader');
    var menuBtn = document.getElementsByClassName('navbar');
    var elementoDivAnteriorANegro = document.getElementById('s7');
    var porcentajeDivNegro = elementoDivAnteriorANegro.getAttribute("parallax-progress") || "0%";
    const nuevoPorcentajeDivNegro = parseInt(porcentajeDivNegro.substring(0, 3)); 
    if(nuevoPorcentajeDivNegro === 100){
        elementoLogo.src="images/logo-claropay-header-white.png";
        elementoLogo.srcset = "images/logo-claropay-header-white@2x.png 2x";
        menuBtn[0].style.backgroundColor="transparent";
    }else{
        elementoLogo.src="images/logo-claropay-header.png";
        elementoLogo.srcset = "images/logo-claropay-header@2x.png 2x";
        menuBtn[0].style.backgroundColor="rgba(255,255,255,.5)";
    }
});