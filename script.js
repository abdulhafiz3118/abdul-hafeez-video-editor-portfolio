/* =========================
   NAVBAR SCROLL
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});



/* =========================
   VIDEO CONTROLS
========================= */

const videos = document.querySelectorAll(".reel-video");

videos.forEach(video => {

    const wrapper = video.closest(".reel-wrapper");

    const playButton =
        wrapper.querySelector(".play-btn");

    const muteButton =
        wrapper.querySelector(".mute-btn");

    const fullscreenButton =
        wrapper.querySelector(".fullscreen-btn");

    const progressBar =
        wrapper.querySelector(".progress-bar");

    const currentTime =
        wrapper.querySelector(".current-time");

    const duration =
        wrapper.querySelector(".duration");


    /* =========================
       PLAY / PAUSE
    ========================= */

    playButton.addEventListener("click", () => {

        if (video.paused) {

            video.play();

            playButton.textContent = "Ⅱ";

        } else {

            video.pause();

            playButton.textContent = "▶";

        }

    });


    /* =========================
       VIDEO PLAY EVENT
    ========================= */

    video.addEventListener("play", () => {

        playButton.textContent = "Ⅱ";

    });


    /* =========================
       VIDEO PAUSE EVENT
    ========================= */

    video.addEventListener("pause", () => {

        playButton.textContent = "▶";

    });


    /* =========================
       MUTE
    ========================= */

    muteButton.addEventListener("click", () => {

        video.muted = !video.muted;

        if (video.muted) {

            muteButton.textContent = "🔇";

        } else {

            muteButton.textContent = "🔊";

        }

    });


    /* =========================
       DURATION
    ========================= */

    video.addEventListener("loadedmetadata", () => {

        duration.textContent =
            formatTime(video.duration);

    });


    /* =========================
       PROGRESS UPDATE
    ========================= */

    video.addEventListener("timeupdate", () => {

        if (!video.duration) return;

        const percentage =
            (video.currentTime / video.duration) * 100;

        progressBar.value = percentage;

        currentTime.textContent =
            formatTime(video.currentTime);

    });


    /* =========================
       SEEK
    ========================= */

    progressBar.addEventListener("input", () => {

        if (!video.duration) return;

        video.currentTime =
            (progressBar.value / 100) *
            video.duration;

    });


    /* =========================
       FULLSCREEN
    ========================= */

    fullscreenButton.addEventListener("click", () => {

        if (video.requestFullscreen) {

            video.requestFullscreen();

        } else if (video.webkitRequestFullscreen) {

            video.webkitRequestFullscreen();

        }

    });


    /* =========================
       CLICK VIDEO
       PLAY / PAUSE
    ========================= */

    video.addEventListener("click", () => {

        if (video.paused) {

            video.play();

        } else {

            video.pause();

        }

    });

});



/* =========================
   FORMAT TIME
========================= */

function formatTime(seconds) {

    if (isNaN(seconds)) {
        return "00:00";
    }

    const minutes =
        Math.floor(seconds / 60);

    const secs =
        Math.floor(seconds % 60);

    return (
        String(minutes).padStart(2, "0")
        +
        ":"
        +
        String(secs).padStart(2, "0")
    );

}



/* =========================
   CAPCUT PROGRESS
========================= */

const capcutBar =
    document.querySelector(".capcut-bar span");

const capcutCard =
    document.querySelector(".capcut-card");


const capcutObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    capcutBar.style.width = "90%";

                }

            });

        },
        {
            threshold: 0.3
        }
    );


if (capcutCard) {

    capcutObserver.observe(capcutCard);

}



/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".reel-wrapper, .detail-card, .skill-card, .contact-item"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =========================
   ACTIVE NAV
========================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});



/* =========================
   CURSOR GLOW
========================= */

const cursorGlow =
    document.querySelector(".cursor-glow");


document.addEventListener("mousemove", event => {

    cursorGlow.style.left =
        event.clientX + "px";

    cursorGlow.style.top =
        event.clientY + "px";

});



/* =========================
   PROFILE PARALLAX
========================= */

const profileCard =
    document.querySelector(".profile-card");


document.addEventListener("mousemove", event => {

    if (!profileCard) return;

    const x =
        (window.innerWidth / 2 - event.clientX) / 45;

    const y =
        (window.innerHeight / 2 - event.clientY) / 45;

    profileCard.style.transform =
        `rotateY(${x}deg) rotateX(${y}deg)`;

});



/* =========================
   RESET PROFILE ON MOUSE OUT
========================= */

document.addEventListener("mouseleave", () => {

    if (profileCard) {

        profileCard.style.transform =
            "rotate(3deg)";

    }

});