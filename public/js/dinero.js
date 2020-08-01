
var porcentaje_anterior = 10000;
window.addEventListener('scroll', function() {
    var el = document.getElementById('dinero-celular');
    var porcentaje = el.getAttribute("parallax-progress");
    porcentaje = parseInt(porcentaje.substring(0, 2));    
    if(Math.abs(porcentaje_anterior - porcentaje) > 4){
        porcentaje_anterior = porcentaje;
        if(porcentaje > 0){
            var decimales = Math.floor(Math.random() * 10) * 10;
            porcentaje = porcentaje * 3;
            el.innerHTML = "$ " + porcentaje + "." + decimales;
        }    
    }  
    
    var elementoLogo = document.getElementById('logoHeader');
    var menuBtn = document.getElementsByClassName('navbar');
    var elementoDivAnteriorANegro = document.getElementById('s7');
    var porcentajeDivNegro = elementoDivAnteriorANegro.getAttribute("parallax-progress");
    porcentajeDivNegro = parseInt(porcentajeDivNegro.substring(0, 3)); 
    if(porcentajeDivNegro == 100){
        elementoLogo.src="images/logo-claropay-header-white.png";
        elementoLogo.srcset = "images/logo-claropay-header-white@2x.png 2x";
        menuBtn[0].style.backgroundColor="transparent";
    }else{
        elementoLogo.src="images/logo-claropay-header.png";
        elementoLogo.srcset = "images/logo-claropay-header@2x.png 2x";
        menuBtn[0].style.backgroundColor="rgba(255,255,255,.5)";
    }
});