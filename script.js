var quotes = [
	{
	quote: "Be yourself; everyone else is already taken.",
	source: "Oscar Wilde"
	},
	{
	quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
	source: "Marilyn Monroe"
	},
	{
	quote: "Keep your eyes on the stars and your feet on the ground.",
	source: "Theodore Roosevelt"
	},
	{
	quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
	source: "Albert Einstein"
	},
	{
	quote: "So many books, so little time.",
	source: "Frank Zappa"
	},
	{
  quote: "A room without books is like a body without a soul.",
  source: "Marcus Tullius Cicero"
  },
  {
  quote: "You only live once, but if you do it right, once is enough.",
  source: "Mae West"
  },
  {
  quote: "Be the change that you wish to see in the world.",
  source: "Mahatma Gandhi"
  },
  {
  quote: "In three words I can sum up everything I've learned about life: it goes on.",
  source: "Robert Frost"
  },
  {
  quote: "If you tell the truth, you don't have to remember anything.",
  source: "Mark Twain"
  },
  {
  quote: "A friend is someone who knows all about you and still loves you.",
  source: "Elbert Hubbard"
  },
  {
  quote: "To live is the rarest thing in the world. Most people exist, that is all.",
  source: "Oscar Wilde"
  },
  {
  quote: "As he read, I fell in love the way you fall asleep: slowly, and then all at once.",
  source: "John Green, The Fault in Our Stars"
  },
  {
  quote:"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
  source: "Neil Gaiman, Coraline"
  },
  {
  quote: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
  source: "William Shakespeare, As You Like It"
  },
  {
  quote: "Life is what happens to us while we are making other plans.",
  source: "Allen Saunders"
  },
  {
  quote: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
  source: "Bill Keane"
  },
  {
  quote: "I have not failed. I've just found 10,000 ways that won't work.",
  source: "Thomas A. Edison"
  },
  {
  quote: "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
  source:"Friedrich Nietzsche"
  },
  {
  quote: "A woman is like a tea bag; you never know how strong it is until it's in hot water.",
  source: "Eleanor Roosevelt"
  },
  {
  quote:"I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
  source: "douglas adams, The Long Dark Tea-Time of the Soul"
  },
  {
  quote: "If you don't stand for something you will fall for anything.",
  source: "Gordon A. Eadie"
  },
  {
  quote: "I solemnly swear that I am up to no good.",
  source: "J.K. Rowling, Harry Potter and the Prisoner of Azkaban"
  },
  {
  quote: "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.",
  source: "Groucho Marx"
  },
  {
  quote:"Love all, trust a few, do wrong to none.",
  source: "William Shakespeare, All's Well That Ends Well"
  }
];



let button = document.getElementById('submit')


function getrandomQuote() {

  var randomNumber = Math.floor(Math.random() * (quotes.length))
  var randomQuote = quotes[randomNumber]
  return (randomQuote)
}


function printQuote () {
  var quotes = getrandomQuote ();
  var quoteContainer = document.getElementById("info");
  var quoteString = `<p class="quote"> <i class="fa-solid fa-quote-left"></i> 
  ${quotes.quote}<i class="fa-sharp fa-solid fa-quote-right"></i></p></br><p class="source">${quotes.source}`;
  
        quoteContainer.innerHTML = quoteString;

     
}





button.addEventListener('click', printQuote)


