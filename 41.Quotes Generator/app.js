const generateQuoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document.getElementById("quoteOutput");
const authorOutput = document.getElementById("authorOutput");

generateQuoteBtn.addEventListener("click", generateQuote);

function generateQuote() {
  let random = Number.parseInt(Math.random() * arryOfQuotes.length + 1);
  quoteOutput.innerHTML = `<span>${arryOfQuotes[random].quote}</span>`;
  authorOutput.innerHTML = `<small>-${arryOfQuotes[random].author}-</small>`;
}

const arryOfQuotes = [
  {
    author: "Albert Einstein",
    quotes:
      "We cannot solve problems with the kind of thinking we employed when we came up with them",
  },
  {
    author: "Eleanor",
    quote:
      "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",
  },
  {
    author: "Norman Vincent Peale",
    quote: "When you change your thoughts, remember to also change your world.",
  },
  {
    author: "Walter",
    quote:
      "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. ",
  },
  {
    author: "Diane McLaren",
    quote:
      "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.",
  },
  {
    author: "Dale Carnegie",
    quote:
      "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
  },
];


