/* ==================================================
   BABY SHOWER LÍA ISABEL
================================================== */


/* ==================================================
   CONFIGURACIÓN
================================================== */

// Número de WhatsApp para confirmar asistencia.
// Formato internacional, sin espacios ni símbolos.
const whatsappNumber = "18156931464";

// Ubicación del evento.
const mapsURL =
    "https://maps.app.goo.gl/auW3b11qTrTf5n6H8";


/* ==================================================
   ELEMENTOS PRINCIPALES
================================================== */

const welcomeScreen =
    document.getElementById("welcomeScreen");

const invitation =
    document.getElementById("invitation");

const openButton =
    document.getElementById("openInvitation");

const locationButton =
    document.getElementById("locationButton");

const confirmButton =
    document.getElementById("confirmButton");

// Música de fondo.
const backgroundMusic =
    document.getElementById("backgroundMusic");


/* ==================================================
   CONFIGURACIÓN DE LA MÚSICA
================================================== */

if (backgroundMusic) {

    // Volumen suave.
    // 0 = silencio
    // 1 = volumen máximo
    backgroundMusic.volume = 0.28;

    // Repetir continuamente.
    backgroundMusic.loop = true;

}


/* ==================================================
   ABRIR INVITACIÓN
================================================== */

if (openButton && welcomeScreen && invitation) {

    openButton.addEventListener(
        "click",
        function () {

            // Evita pulsaciones repetidas.
            openButton.disabled = true;


            /* ==========================================
               INICIAR MÚSICA
            ========================================== */

            if (backgroundMusic) {

                backgroundMusic
                    .play()
                    .catch(
                        function (error) {

                            console.log(
                                "El navegador no permitió iniciar la música:",
                                error
                            );

                        }
                    );

            }


            /* ==========================================
               ANIMACIÓN DE ENTRADA
            ========================================== */

            welcomeScreen.style.transition =
                "opacity 0.9s ease, transform 0.9s ease";

            welcomeScreen.style.opacity = "0";

            welcomeScreen.style.transform =
                "scale(1.05)";


            setTimeout(
                function () {

                    welcomeScreen.style.display = "none";

                    invitation.classList.remove("hidden");


                    /* VOLVER ARRIBA */

                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "instant"
                    });


                    /* ACTIVAR ANIMACIONES */

                    startScrollAnimations();


                    /* ACTIVAR PÉTALOS */

                    startPetals();

                },
                900
            );

        }
    );

}


/* ==================================================
   ANIMACIONES AL HACER SCROLL
================================================== */

function startScrollAnimations() {

    const elements =
        document.querySelectorAll(".reveal");


    if (!elements.length) {
        return;
    }


    /*
       Compatibilidad con navegadores antiguos.
    */

    if (!("IntersectionObserver" in window)) {

        elements.forEach(
            function (element) {

                element.classList.add("active");

            }
        );

        return;
    }


    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(

                    function (entry) {

                        if (entry.isIntersecting) {

                            entry.target
                                .classList
                                .add("active");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }

                );

            },

            {
                threshold: 0.15
            }

        );


    elements.forEach(

        function (element) {

            observer.observe(element);

        }

    );

}


/* ==================================================
   PÉTALOS
================================================== */

let petalsStarted = false;
let petalsInterval = null;


function startPetals() {

    if (petalsStarted) {
        return;
    }


    petalsStarted = true;


    petalsInterval =
        setInterval(
            createPetal,
            1800
        );

}


/* ==================================================
   CREAR PÉTALO
================================================== */

function createPetal() {

    /*
       Si la pestaña está en segundo plano,
       no generamos pétalos.
    */

    if (document.hidden) {
        return;
    }


    const petal =
        document.createElement("div");


    petal.classList.add("petal");


    const petals = [
        "🌸",
        "✨",
        "🌼",
        "ꕤ",
        "♡"
    ];


    const randomPetal =
        petals[
            Math.floor(
                Math.random() *
                petals.length
            )
        ];


    petal.textContent =
        randomPetal;


    /* POSICIÓN HORIZONTAL */

    petal.style.left =
        Math.random() * 95 + "vw";


    /* TAMAÑO */

    petal.style.fontSize =
        (
            10 +
            Math.random() * 12
        )
        +
        "px";


    /* VELOCIDAD */

    petal.style.animationDuration =
        (
            8 +
            Math.random() * 6
        )
        +
        "s";


    document.body.appendChild(petal);


    /* ELIMINAR DESPUÉS DE CAER */

    setTimeout(
        function () {

            petal.remove();

        },
        15000
    );

}


/* ==================================================
   MOVIMIENTO SUAVE DE MARIPOSAS
================================================== */

document.addEventListener(

    "mousemove",

    function (event) {

        /*
           En teléfonos y dispositivos táctiles
           no necesitamos este efecto.
        */

        if (
            window.matchMedia(
                "(hover: none)"
            ).matches
        ) {
            return;
        }


        const butterflies =
            document.querySelectorAll(
                ".floating-butterfly"
            );


        if (!butterflies.length) {
            return;
        }


        const x =
            (
                event.clientX /
                window.innerWidth
                -
                0.5
            )
            *
            8;


        const y =
            (
                event.clientY /
                window.innerHeight
                -
                0.5
            )
            *
            8;


        butterflies.forEach(

            function (butterfly, index) {

                const multiplier =
                    index + 1;


                butterfly.style.marginLeft =
                    (
                        x *
                        multiplier
                    )
                    +
                    "px";


                butterfly.style.marginTop =
                    (
                        y *
                        multiplier
                    )
                    +
                    "px";

            }

        );

    }

);


/* ==================================================
   GOOGLE MAPS
================================================== */

if (locationButton) {

    locationButton.addEventListener(
        "click",
        function () {

            window.open(
                mapsURL,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}


/* ==================================================
   CONFIRMAR ASISTENCIA
================================================== */

if (confirmButton) {

    confirmButton.addEventListener(

        "click",

        function () {

            const guestNameInput =
                document.getElementById(
                    "guestName"
                );


            const guestCountSelect =
                document.getElementById(
                    "guestCount"
                );


            if (
                !guestNameInput ||
                !guestCountSelect
            ) {
                return;
            }


            const guestName =
                guestNameInput
                    .value
                    .trim();


            const guestCount =
                guestCountSelect.value;


            /* ==========================================
               VALIDAR NOMBRE
            ========================================== */

            if (!guestName) {

                alert(
                    "Por favor escribe tu nombre ♡"
                );

                guestNameInput.focus();

                return;
            }


            /* ==========================================
               VALIDAR WHATSAPP
            ========================================== */

            if (!whatsappNumber) {

                alert(
                    "El número para confirmar estará disponible próximamente."
                );

                return;
            }


            /* ==========================================
               MENSAJE DE WHATSAPP
            ========================================== */

            const message =
`Hola ♡

Quiero confirmar mi asistencia al Baby Shower de Lia Isabel.

Nombre: ${guestName}
Personas que asistirán: ${guestCount}

¡Muchas gracias por la invitación! 🌸`;


            const whatsappURL =
                "https://wa.me/"
                +
                whatsappNumber
                +
                "?text="
                +
                encodeURIComponent(
                    message
                );


            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        }

    );

}


/* ==================================================
   FIN
================================================== */