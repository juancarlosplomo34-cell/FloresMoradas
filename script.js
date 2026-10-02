const boton = document.getElementById("botonFlores");

const mensaje = document.getElementById("mensaje");

const indicacion = document.getElementById("indicacion");


boton.addEventListener("click", function () {

    mensaje.classList.toggle("oculto");


    if (mensaje.classList.contains("oculto")) {

        boton.textContent = "💌 Tengo algo que decirte";

        indicacion.style.opacity = "0.85";

        indicacion.style.transform = "translateY(0)";

    } else {

        boton.textContent = "💜 Para ti";

        indicacion.style.opacity = "0";

        indicacion.style.transform = "translateY(-10px)";

    }

});