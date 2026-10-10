/* ==================================================
   BABY SHOWER LÍA ISABEL
================================================== */


// ==================================================
// CONFIGURACIÓN
// ==================================================

const eventDate = new Date(
    "2027-01-09T16:00:00-06:00"
);


// WHATSAPP
// Ejemplo: 16301234567

const whatsappNumber = "18156931464";



// ==================================================
// ABRIR INVITACIÓN
// ==================================================

const welcomeScreen =
    document.getElementById("welcomeScreen");

const invitation =
    document.getElementById("invitation");

const openButton =
    document.getElementById("openInvitation");


if (openButton) {

    openButton.addEventListener(
        "click",
        function () {

            welcomeScreen.style.transition =
                "opacity 0.9s ease, transform 0.9s ease";

            welcomeScreen.style.opacity =
                "0";

            welcomeScreen.style.transform =
                "scale(1.05)";


            setTimeout(
                function () {

                    welcomeScreen.style.display =
                        "none";

                    invitation.classList.remove(
                        "hidden"
                    );

                    window.scrollTo(
                        0,
                        0
                    );

                    startScrollAnimations();

                    startPetals();

                },
                900
            );

        }
    );

}



// ==================================================
// CUENTA REGRESIVA
// ==================================================

function updateCountdown() {

    const now =
        new Date().getTime();

    const distance =
        eventDate.getTime() - now;


    if (distance <= 0) {

        const countdown =
            document.getElementById("countdown");

        if (countdown) {

            countdown.innerHTML = `

                <div class="event-today">

                    <h3>
                        ¡Llegó el gran día! ♡
                    </h3>

                    <p>
                        Hoy celebramos la dulce
                        espera de Lía Isabel.
                    </p>

                </div>

            `;

        }

        return;
    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60 * 24)
            )
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60)
            )
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (
                distance %
                (1000 * 60)
            )
            /
            1000
        );


    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");


    if (daysElement) {
        daysElement.textContent =
            String(days).padStart(2, "0");
    }


    if (hoursElement) {
        hoursElement.textContent =
            String(hours).padStart(2, "0");
    }


    if (minutesElement) {
        minutesElement.textContent =
            String(minutes).padStart(2, "0");
    }


    if (secondsElement) {
        secondsElement.textContent =
            String(seconds).padStart(2, "0");
    }

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);



// ==================================================
// ANIMACIONES AL BAJAR
// ==================================================

function startScrollAnimations() {

    const elements =
        document.querySelectorAll(".reveal");


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

            observer.observe(
                element
            );

        }

    );

}



// ==================================================
// PÉTALOS
// ==================================================

let petalsStarted = false;


function startPetals() {

    if (petalsStarted) {
        return;
    }


    petalsStarted = true;


    setInterval(

        function () {

            createPetal();

        },

        1800

    );

}


function createPetal() {

    const petal =
        document.createElement("div");


    petal.classList.add(
        "petal"
    );


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


    petal.style.left =
        Math.random() *
        95 +
        "vw";


    petal.style.fontSize =
        (
            10 +
            Math.random() *
            12
        )
        +
        "px";


    petal.style.animationDuration =
        (
            8 +
            Math.random() *
            6
        )
        +
        "s";


    document.body.appendChild(
        petal
    );


    setTimeout(

        function () {

            petal.remove();

        },

        15000

    );

}



// ==================================================
// MOVIMIENTO SUAVE DE MARIPOSAS CON EL MOUSE
// ==================================================

document.addEventListener(

    "mousemove",

    function (event) {

        const butterflies =
            document.querySelectorAll(
                ".floating-butterfly"
            );


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

            function (
                butterfly,
                index
            ) {

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



// ==================================================
// GOOGLE MAPS
// ==================================================

const locationButton =
    document.getElementById(
        "locationButton"
    );


if (locationButton) {

    locationButton.addEventListener(
        "click",
        function () {

            const mapsURL =
                "https://maps.app.goo.gl/auW3b11qTrTf5n6H8";


            window.open(
                mapsURL,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}



// ==================================================
// CONFIRMAR ASISTENCIA
// ==================================================

const confirmButton =
    document.getElementById(
        "confirmButton"
    );


if (confirmButton) {

    confirmButton.addEventListener(

        "click",

        function () {

            const guestName =
                document
                    .getElementById(
                        "guestName"
                    )
                    .value
                    .trim();


            const guestCount =
                document
                    .getElementById(
                        "guestCount"
                    )
                    .value;


            if (!guestName) {

                alert(
                    "Por favor escribe tu nombre ♡"
                );

                return;

            }


            if (!whatsappNumber) {

                alert(
                    "El número para confirmar estará disponible próximamente."
                );

                return;

            }


            const message = `Hola ♡

Quiero confirmar mi asistencia al Baby Shower de Lía Isabel.

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