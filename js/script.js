const homeScreen = document.querySelector("#home-screen");
const welcomeScreen = document.querySelector("#welcome-screen");
const enterBtn = document.querySelector("#enterBtn");

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
