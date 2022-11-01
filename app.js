let quotes =
[
    "I would rather spend one lifetime with you, than face all the ages of this world alone.", //LOTR Arwen
    "Fear is the mind-killer.", //Dune Lady Jessica Atrides
    "Fool of a Took!", //LOTR Gandalf
    "The man in black fled across the desert, and the gunslinger followed.",//GunSlinger - Narrator opening line
    "There is only one thing we say to death: Not today!", //GOT Syrio and Arya
];
console.log(quotes);

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
});
// //info section
// const quote0 = {
//   quote : "I would rather spend one lifetime with you, than face all the ages of this world alone.", 
//   speaker: "Arwen", 
//   from: "Lord of the Rings", 
// }
// console.log(quote0); 

// const quote1 = {
//   quote: "Fear is the mind-killer.",
//   speaker: "Lady Jessica",
//   from: "Dune",
// }

// const quote2 = {
//   quote: "Fool of a Took!",
//   speaker: "Gandalf the Grey",
//   from: "Lord of the Rings",
// }
// const quote3 = {
//   quote: "The man in black fled across the desert, and the gunslinger followed.",
//   speaker: "Narrator",
//   from: "The Gunsligner, Book",
// }
// const quote4 = {
//   quote: "There is only one thing we say to death: Not today!",
//   speaker: "Arya",
//   from: "Game of Thrones", 
// }; 

// if (quotes.includes("I would rather")) {
//   console.log(quote0)
// } else if (quotes.includes("Fear is")){
//   console.log(quote1);
// } else if (quotes.includes("Fool")) {
//   console.log(quote2);
// } else if (quotes.includes("The man")) {
//   console.log(quote3);
// } else {
//   console.log(quote4);
// };


//Work inside the document.addEventListener
//I had a lot of trouble trying to get the random quote generator working.
  //it kept removing the css in some places
// document.addEventListener("DOMContentLoaded", function(event) {
// const getRandomQuote = () => {
//     return quotes[Math.floor(Math.random() * quotes.length)];
// };
// console.log(getRandomQuote());
//Part 1
document.querySelector('#main-title').textContent = 'Where the Adventures Take You';

// Part 2
document.querySelector('body').style.backgroundColor = "#ecf8e5";
document.querySelector('body').style.color = "#347571"

// Part 3 - did not add to code

// Part 4
//document.querySelector("#main-title").style.textAlign = "center";
