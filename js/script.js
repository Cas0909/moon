const homeScreen = document.querySelector("#home-screen");
const welcomeScreen = document.querySelector("#welcome-screen");
const introScreen = document.querySelector("#intro-screen");
const worldScreen = document.querySelector("#world-screen");
const moonScreen = document.querySelector("#moon-screen");

const enterBtn = document.querySelector("#enterBtn");
const continueBtn = document.querySelector("#continueBtn");
const exploreBtn = document.querySelector("#exploreBtn");
const moonPathBtn = document.querySelector("#moonPathBtn");
const backFromMoonBtn = document.querySelector("#backFromMoonBtn");

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

let isTransitioning = false;

function switchScreen(currentScreen, nextScreen) {
    if (isTransitioning) return;

    if (prefersReducedMotion) {
        currentScreen.classList.add("hidden");
        nextScreen.classList.remove("hidden");
        return;
    }

    isTransitioning = true;
    currentScreen.classList.add("fade-out");

    setTimeout(() => {
        currentScreen.classList.add("hidden");
        currentScreen.classList.remove("fade-out");

        nextScreen.classList.add("fade-in");
        nextScreen.classList.remove("hidden");

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                nextScreen.classList.remove("fade-in");

                setTimeout(() => {
                    isTransitioning = false;
                }, 600);
            });
        });
    }, 600);
}

const random = window.cards[
    Math.floor(Math.random() * window.cards.length)
];

homeScreen.querySelector(".subtitle").textContent = random.text;

enterBtn.textContent =
    random.actions[
        Math.floor(Math.random() * random.actions.length)
    ];

enterBtn.addEventListener("click", () => {
    switchScreen(homeScreen, welcomeScreen);
});

continueBtn.addEventListener("click", () => {
    switchScreen(welcomeScreen, introScreen);
});

exploreBtn.addEventListener("click", () => {
    switchScreen(introScreen, worldScreen);
});

moonPathBtn.addEventListener("click", () => {
    switchScreen(worldScreen, moonScreen);
});

backFromMoonBtn.addEventListener("click", () => {
    switchScreen(moonScreen, worldScreen);
});
