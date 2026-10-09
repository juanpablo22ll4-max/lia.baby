/* ==================================================
   BABY SHOWER LÍA ISABEL
================================================== */


// ==================================================
// CONFIGURACIÓN
// ==================================================

const eventDate =
    new Date(
        "2027-01-09T16:00:00-06:00"
    );


// DIRECCIÓN

const eventAddress =
    "Dirección próximamente";


// LINK DE AMAZON

const amazonLink =
    "";


// WHATSAPP
// Ejemplo: 16301234567

const whatsappNumber =
    "";



// ==================================================
// ABRIR INVITACIÓN
// ==================================================

const welcomeScreen =
    document.getElementById(
        "welcomeScreen"
    );


const invitation =
    document.getElementById(
        "invitation"
    );


const openButton =
    document.getElementById(
        "openInvitation"
    );


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



// ==================================================
// CUENTA REGRESIVA
// ==================================================

function updateCountdown() {

    const now =
        new Date().getTime();


    const distance =
        eventDate.getTime() -
        now;


    if (
        distance <= 0
    ) {

        document.getElementById(
            "countdown"
        ).innerHTML = `

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

        return;
    }


    const days =
        Math.floor(

            distance /

            (
                1000 *
                60 *
                60 *
                24
            )

        );


    const hours =
        Math.floor(

            (
                distance %

                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            )

            /

            (
                1000 *
                60 *
                60
            )

        );


    const minutes =
        Math.floor(

            (
                distance %

                (
                    1000 *
                    60 *
                    60
                )
            )

            /

            (
                1000 *
                60
            )

        );


    const seconds =
        Math.floor(

            (
                distance %

                (
                    1000 *
                    60
                )
            )

            /

            1000

        );


    document.getElementById(
        "days"
    ).textContent =
        String(days)
        .padStart(
            2,
            "0"
        );


    document.getElementById(
        "hours"
    ).textContent =
        String(hours)
        .padStart(
            2,
            "0"
        );


    document.getElementById(
        "minutes"
    ).textContent =
        String(minutes)
        .padStart(
            2,
            "0"
        );


    document.getElementById(
        "seconds"
    ).textContent =
        String(seconds)
        .padStart(
            2,
            "0"
        );

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
        document.querySelectorAll(
            ".reveal"
        );


    const observer =
        new IntersectionObserver(

            function (
                entries
            ) {

                entries.forEach(

                    function (
                        entry
                    ) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add(
                                    "active"
                                );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }

                );

            },

            {

                threshold:
                    0.15

            }

        );


    elements.forEach(

        function (
            element
        ) {

            observer.observe(
                element
            );

        }

    );

}



// ==================================================
// PÉTALOS
// ==================================================

let petalsStarted =
    false;


function startPetals() {

    if (
        petalsStarted
    ) {

        return;

    }


    petalsStarted =
        true;


    setInterval(

        function () {

            createPetal();

        },

        1800

    );

}


function createPetal() {

    const petal =
        document.createElement(
            "div"
        );


    petal.classList.add(
        "petal"
    );


    const petals = [
        "🌸",
        "🌷",
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

    function (
        event
    ) {

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
// DIRECCIÓN
// ==================================================

document.getElementById(
    "eventAddress"
).textContent =
    eventAddress;



// ==================================================
// GOOGLE MAPS
// ==================================================

document.getElementById(
    "locationButton"
)
.addEventListener(

    "click",

    function () {

        if (
            eventAddress ===
            "Dirección próximamente"
        ) {

            alert(
                "Próximamente compartiremos la ubicación ♡"
            );

            return;

        }


        const mapsURL =

            "https://www.google.com/maps/search/?api=1&query="

            +

            encodeURIComponent(
                eventAddress
            );


        window.open(
            mapsURL,
            "_blank",
            "noopener,noreferrer"
        );

    }

);



// ==================================================
// AMAZON
// ==================================================

document.getElementById(
    "amazonButton"
)
.addEventListener(

    "click",

    function (
        event
    ) {

        event.preventDefault();


        if (
            !amazonLink
        ) {

            alert(
                "Nuestra lista de regalos estará disponible próximamente 🎀"
            );

            return;

        }


        window.open(
            amazonLink,
            "_blank",
            "noopener,noreferrer"
        );

    }

);



// ==================================================
// CONFIRMAR ASISTENCIA
// ==================================================

document.getElementById(
    "confirmButton"
)
.addEventListener(

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


        if (
            !guestName
        ) {

            alert(
                "Por favor escribe tu nombre ♡"
            );

            return;

        }


        if (
            !whatsappNumber
        ) {

            alert(
                "El número para confirmar estará disponible próximamente."
            );

            return;

        }


        const message =

`Hola ♡

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