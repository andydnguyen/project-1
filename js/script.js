/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/
var quotes = [
  {
    quote: "Never test the depth of the river with both feet",
    source: "Warren Buffet",
  },
  {
    quote: "Behind every successful Man there's is lot of unsuccessful years.",
    source: "Bob Brown",
  },
  {
    quote: "The expert at anything was once a beginner.",
    source: "Helen Hayes",
  },
  {
    quote: "You Can't start the next chapter of your life if you keep re-reading the last one.",
    source: "Anonymous",
  },
  {
    quote: "Don't raise your voice, improve your argument.",
    source: "Desmond Tutu",
    year: "23 November 2004"
  }
];

// loq quotes array to console for debugging purposes
console.log(quotes);

/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/
function getRandomQuote (){
  return quotes[Math.floor(Math.random() * quotes.length)];
}

console.log(getRandomQuote());



/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/
function printQuote(){
  var quote = getRandomQuote();

  var quoteString = "<p class='quote'>" + quote.quote + "</p>";
  quoteString += "<p class='source'>" + quote.source;

  if (quote.citation != undefined) {
    quoteString += "<span class='citation'>" + quote.citation + "</span>";
  }

  if (quote.year != undefined) {
    quoteString += "<span class='year'>" + quote.year + "</span>";
  }

  quoteString += "</p>";

  document.getElementById('quote-box').innerHTML = quoteString;

}

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
