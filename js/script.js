alert("1");

alert(typeof cards);

const random = cards[
    Math.floor(Math.random() * cards.length)
];

alert("2");

document.querySelector(".subtitle").textContent = random.text;

alert("3");

document.querySelector("button").textContent =
    random.actions[
        Math.floor(Math.random() * random.actions.length)
    ];

alert("4");
