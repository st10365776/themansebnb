document.addEventListener("DOMContentLoaded", () => {

    /* ========================================
       GSAP SETUP
    ======================================== */

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    if (typeof ScrollToPlugin !== "undefined") {
        gsap.registerPlugin(ScrollToPlugin);
    }


    /* ========================================
       ELEMENTS
    ======================================== */

    const header = document.querySelector(".site-header");
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");
    const backTop = document.querySelector(".back-top");
    const year = document.getElementById("year");


    /* ========================================
       CURRENT YEAR
    ======================================== */

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* ========================================
       HEADER
    ======================================== */

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 40) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

            if (backTop) {
                if (window.scrollY > 500) {
                    backTop.classList.add("show");
                } else {
                    backTop.classList.remove("show");
                }
            }

        }, { passive: true });

    }


    /* ========================================
       MOBILE MENU
    ======================================== */

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            const isOpen = nav.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuToggle.textContent = isOpen ? "×" : "☰";

        });


        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.textContent = "☰";

            });

        });

    }


    /* ========================================
       BACK TO TOP
    ======================================== */

    if (backTop) {

        backTop.addEventListener("click", () => {

            if (typeof ScrollToPlugin !== "undefined") {

                gsap.to(window, {
                    duration: 0.6,
                    scrollTo: {
                        y: 0
                    },
                    ease: "power2.out"
                });

            } else {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }

        });

    }


    /* ========================================
       HERO INTRO
    ======================================== */

    const hero = document.querySelector(".hero");

    if (hero) {

        const heroContent = hero.querySelector(".hero-content");
        const heroImage = hero.querySelector(".hero-image");
        const heroEyebrow = hero.querySelector(".eyebrow");
        const heroHeading = hero.querySelector("h1");
        const heroText = hero.querySelector("p");
        const heroButton = hero.querySelector(".button");


        const heroTimeline = gsap.timeline({
            defaults: {
                ease: "power2.out"
            }
        });


        if (heroImage) {

            gsap.set(heroImage, {
                opacity: 0,
                scale: 1.03
            });

            heroTimeline.to(heroImage, {
                opacity: 1,
                scale: 1,
                duration: 0.8
            });

        }


        if (heroContent) {

            gsap.set(heroContent, {
                opacity: 1
            });

        }


        if (heroEyebrow) {

            gsap.from(heroEyebrow, {
                opacity: 0,
                y: 18,
                duration: 0.45,
                delay: 0.15
            });

        }


        if (heroHeading) {

            gsap.from(heroHeading, {
                opacity: 0,
                y: 25,
                duration: 0.55,
                delay: 0.2
            });

        }


        if (heroText) {

            gsap.from(heroText, {
                opacity: 0,
                y: 18,
                duration: 0.45,
                delay: 0.3
            });

        }


        if (heroButton) {

            gsap.from(heroButton, {
                opacity: 0,
                y: 15,
                duration: 0.4,
                delay: 0.4
            });

        }

    }


    /* ========================================
       GENERIC SCROLL REVEAL
    ======================================== */

    const revealElements = document.querySelectorAll(
        ".about-grid, " +
        ".statement, " +
        ".rooms-cta-content, " +
        ".location-grid, " +
        ".booking-inner, " +
        ".rooms-intro"
    );


    revealElements.forEach(element => {

        gsap.from(element, {

            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power2.out",

            scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true
            }

        });

    });


    /* ========================================
       SECTION HEADINGS
    ======================================== */

    const sectionHeadings = document.querySelectorAll(
        ".section-heading"
    );


    sectionHeadings.forEach(heading => {

        gsap.from(heading, {

            opacity: 0,
            y: 22,
            duration: 0.5,
            ease: "power2.out",

            scrollTrigger: {
                trigger: heading,
                start: "top 90%",
                once: true
            }

        });

    });


    /* ========================================
       AMENITIES
    ======================================== */

    const amenities = document.querySelectorAll(
        ".amenity"
    );


    if (amenities.length) {

        gsap.from(amenities, {

            opacity: 0,
            y: 20,
            duration: 0.45,
            stagger: 0.07,
            ease: "power2.out",

            scrollTrigger: {
                trigger: amenities[0],
                start: "top 88%",
                once: true
            }

        });

    }


    /* ========================================
       GALLERY
    ======================================== */

    const galleryItems = document.querySelectorAll(
        ".gallery-item"
    );


    if (galleryItems.length) {

        gsap.from(galleryItems, {

            opacity: 0,
            y: 25,
            duration: 0.55,
            stagger: 0.08,
            ease: "power2.out",

            scrollTrigger: {
                trigger: galleryItems[0],
                start: "top 88%",
                once: true
            }

        });

    }


    /* ========================================
       ROOM DETAILS
    ======================================== */

    const roomDetails = document.querySelectorAll(
        ".room-detail"
    );


    if (roomDetails.length) {

        roomDetails.forEach(room => {

            gsap.from(room, {

                opacity: 0,
                y: 30,
                duration: 0.6,
                ease: "power2.out",

                scrollTrigger: {
                    trigger: room,
                    start: "top 88%",
                    once: true
                }

            });

        });

    }


    /* ========================================
       ROOM IMAGES
    ======================================== */

    const roomImages = document.querySelectorAll(
        ".room-detail img"
    );


    roomImages.forEach(image => {

        gsap.from(image, {

            opacity: 0,
            scale: 1.025,
            duration: 0.7,
            ease: "power2.out",

            scrollTrigger: {
                trigger: image,
                start: "top 90%",
                once: true
            }

        });

    });


    /* ========================================
       ROOMS CTA IMAGE
    ======================================== */

    const roomsCTA = document.querySelector(".rooms-cta");

    if (roomsCTA) {

        const image = roomsCTA.querySelector(
            ".rooms-cta-image"
        );

        if (image) {

            gsap.from(image, {

                scale: 1.04,
                duration: 1,
                ease: "power2.out",

                scrollTrigger: {
                    trigger: roomsCTA,
                    start: "top 85%",
                    once: true
                }

            });

        }

    }


    /* ========================================
       BUTTON HOVER
    ======================================== */

    const buttons = document.querySelectorAll(
        ".button, .nav-cta"
    );


    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            gsap.to(button, {
                y: -2,
                duration: 0.2,
                ease: "power2.out"
            });

        });


        button.addEventListener("mouseleave", () => {

            gsap.to(button, {
                y: 0,
                duration: 0.2,
                ease: "power2.out"
            });

        });

    });


    /* ========================================
       IMAGE HOVER
    ======================================== */

    const galleryImages = document.querySelectorAll(
        ".gallery-item img"
    );


    galleryImages.forEach(image => {

        image.addEventListener("mouseenter", () => {

            gsap.to(image, {
                scale: 1.04,
                duration: 0.35,
                ease: "power2.out"
            });

        });


        image.addEventListener("mouseleave", () => {

            gsap.to(image, {
                scale: 1,
                duration: 0.35,
                ease: "power2.out"
            });

        });

    });


    /* ========================================
       SMOOTH ANCHOR LINKS
    ======================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener("click", function (event) {

            const targetID = this.getAttribute("href");

            if (
                !targetID ||
                targetID === "#"
            ) {
                return;
            }


            const target = document.querySelector(
                targetID
            );

            if (!target) {
                return;
            }


            event.preventDefault();


            const headerHeight = header
                ? header.offsetHeight
                : 0;


            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;


            if (typeof ScrollToPlugin !== "undefined") {

                gsap.to(window, {

                    duration: 0.55,

                    scrollTo: {
                        y: targetPosition
                    },

                    ease: "power2.out"

                });

            } else {

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }


            /* Close mobile menu */

            if (nav && menuToggle) {

                nav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.textContent = "☰";

            }

        });

    });


    /* ========================================
       REDUCED MOTION
    ======================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (prefersReducedMotion) {

        gsap.globalTimeline.timeScale(10);

    }

});