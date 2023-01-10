//Variables
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"Our lives begin to end the day we become silent about things that matter."`,
    person: `"Martin Luther King, Jr"`,
  },
  {
    quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
    person: `"Dalai Lama"`,
  },
  {
    quote: `"The journey of a thousand miles begin with one step ."`,
    person: `"Lao Tzu"`,
  },
  {
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    person: `"Oprah Windrey"`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
