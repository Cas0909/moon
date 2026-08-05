alert("JS正常");

function showCard() {

    const random = window.cards[
        Math.floor(Math.random() * window.cards.length)
    ];

    document.querySelector(".subtitle").textContent = random.text;

    document.querySelector("button").textContent =
        random.actions[
            Math.floor(Math.random() * random.actions.length)
        ];
}


showCard();
