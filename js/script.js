const homeScreen = document.querySelector("#home-screen");
const welcomeScreen = document.querySelector("#welcome-screen");
const introScreen = document.querySelector("#intro-screen");

const enterBtn = document.querySelector("#enterBtn");
const continueBtn = document.querySelector("#continueBtn");

const random = window.cards[
    Math.floor(Math.random() * window.cards.length)
];

homeScreen.querySelector(".subtitle").textContent = random.text;

enterBtn.textContent =
    random.actions[
        Math.floor(Math.random() * random.actions.length)
    ];

enterBtn.addEventListener("click", () => {
    homeScreen.classList.add("hidden");
    welcomeScreen.classList.remove("hidden");
});

continueBtn.addEventListener("click", () => {
    welcomeScreen.classList.add("hidden");
    introScreen.classList.remove("hidden");
});
