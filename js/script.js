const random =
quotes[
Math.floor(
Math.random()*quotes.length
)
];

document.querySelector(".subtitle").textContent = random;
