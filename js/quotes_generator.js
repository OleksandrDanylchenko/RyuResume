const quotes = [
  "Падение - это не провал. Провал - это Провал. Падение - это где упал.",
  "Ryu слабее льва и тигра, но зато в цирке не выступает",
  "Кто прочитал тот выступит в цирке",
  "Не важно кто слабее Важно кто не выступает в цирке",
  "Не слушай тех, кто много обещают, Они обычно много обещают",
  "Каждый думает, что знает меня, но не каждый знает, что не знает, кто думает",
  "Лучше быть последним-первым, чем первым-последним",
  "Спасибо прадеду за деда",
  "Враги не предают, предают враги",
  "А люди ведь сейчас такие... Согласны одни, Узнали другие...",
  "Ты не пацан.",
];

let quoteArea = document.getElementById("quoteArea");
let quote = document.getElementById("quote");
let originalQuote = quote.innerText;

quoteArea.addEventListener("mouseenter", () => {
  let randomWolfQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = randomWolfQuote;
});

quoteArea.addEventListener("mouseleave", () => {
  quote.innerText = originalQuote;
});
