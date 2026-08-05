alert("script 有執行");

const random = cards[
  Math.floor(Math.random() * cards.length)
];

console.log(random);

document.querySelector(".subtitle").textContent = random.text;

document.querySelector("button").textContent =
  random.actions[
    Math.floor(Math.random() * random.actions.length)
  ];
