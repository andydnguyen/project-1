/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

/***
  Project 1
  Build a random quote generator that shows a different quote when
  "Show another quote" is clicked on.
***/

/***
  An array of quotes used as a source for when "Show another quote" button is clicked.
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
// console.log(quotes);

/***
  This function is to provide a number from 0 - the max number leagth of the
  array, this is in cause more quotes is entered into the array
***/
function getRandomQuote (){
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// loq the quote object to console for debugging purposes
// console.log(getRandomQuote());

/***
  This function is to create a html string to set into the innerHTML of
  quote-box.
    - Calls getRandomQuote() to grab a random quote from the quotes array
    - Set the return quote to randomQuote and build the html string to replace
      the innerHTML of quote-box
***/
function printQuote(){
  var randomQuote = getRandomQuote();

  var quoteString = "<p class='quote'>" + randomQuote.quote + "</p>";
  quoteString += "<p class='source'>" + randomQuote.source;

  // check to see if randomQuote was the property citation, if it does then
  // add it to the html string
  if (randomQuote.citation != undefined) {
    quoteString += "<span class='citation'>" + randomQuote.citation + "</span>";
  }

  // check to see if randomQuote was the property year, if it does then
  // add it to the html string
  if (randomQuote.year != undefined) {
    quoteString += "<span class='year'>" + randomQuote.year + "</span>";
  }

  quoteString += "</p>";

  // setting the html string to quote-box's innerHTML
  document.getElementById('quote-box').innerHTML = quoteString;

}

/***
  Add an event listener to the button "Show another quote". When the button is
  clicked it triggers the function printQuote
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
