// Call the HTML elements
let displayQuote = document.querySelector('.fas');
let author = document.querySelector('#author');
let exit = document.querySelector('.fab');
let exitBtn = document.getElementById('twitter');
let newQuote = document.querySelector('#new-quote');

// Declare the quotes and the authors using array of object
let quotes = [
    {quote:'Keep ur frnds rich nd ur enemies rich nd wait to find out which is which', authors : 'Tony Stark'}, 
    {quote:'Life has to be lived forward but only make sense in reverse', authors : 'Stan Lee'}, 
    {quote:'Great things never comes from comfort zones', authors : 'Harp Doe'}, 
    {quote:'Life is about Perception not Time', authors : 'Sus Boy'}, 
    {quote:'You dont have to be great to start but you have to start to be great', authors : 'JJ Karly'}, 
    {quote:"You miss 100% of the shots you don't take", authors : 'Thomas Eddison'}, 
    {quote:"Learn what they didn't teach you or keep playing someone else's game", authors : 'Grace Alison'}, 
    {quote:'When the World is in Fowl hands, whose going to Egg-Xplore it?',authors : 'Alison Woodward'}, 
    {quote:'The price in greatness is responsibility', authors : 'Bill Frankly'}, 
    {quote:"It's the truly powerless who are all too eager to demonstrate their newly found strength", authors : 'Alexander Will'}, 
    {quote:'Consistency is what turns small efforts into big results', authors : 'Jeff Danny'}, 
    {quote:'Our ACTIONS are what sets things in MOTION', authors : 'Red John'}, 
    {quote:"It's corruption until it benefits you then it's connection", authors : 'De Light'}, 
    {quote:"If there are no losses, we wouldn't appreciate our wins", authors : 'Bruce Linlcon'}, 
    {quote:"Clean money never comes big and Big money never comes clean", authors : 'Davis Hawk'}, 
];

// Quote Function
function theQuotes() {

    // Make the quote random
    let random = Math.trunc(Math.random() * quotes.length)

    // Display the quote in the html element
    displayQuote.textContent = quotes[random].quote
    author.textContent = quotes[random].authors
};

// Exit the quote
function exitQuote() {

    displayQuote.textContent = '';
    author.textContent = '';
};

// Generate the quote when clicked
newQuote.addEventListener('click', function() {

    // Call the function
    theQuotes();

    // Add 'Exit Text' to the exit btn
    exit.textContent = 'Exit';
});

exitBtn.addEventListener('click', function() {

    // Call the function
    exitQuote();

    // Remove 'Exit Text' from the exit btn
    exit.textContent = '';
});