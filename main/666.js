// .SPLIT!!!!

// function splitMessage(message, delimiter) {
//     let words;
//     // Change code below this line
//   words = message.split(delimiter);
//     // Change code above this line
//     return words;
//   }
//   console.log(splitMessage("Mango hurries to the train", " "));
//   console.log(splitMessage("Mango", ""));
//   console.log(splitMessage("best_for_week", "_"));

// --------------------------------------------------

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
// let totalPrice;
//  message = message.split(' ');
//  totalPrice = message.length * pricePerWord;

// return totalPrice;
//   // Change code above this line
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));
// console.log(calculateEngravingPrice('Web-development is creative work', 20));

// --------------------------------------------------

// .JOIN!!!!

function slugify(title) {
  // Change code below this line
 let slug = title.toLowerCase();

  // Change code above this line
}

// function slugify(title) {
//   const separator = "-";
//   const slug = title.toLowerCase().join(separator);
//   return slug;
// }
console.log(slugify('Arrays for begginers')); //повертає 'arrays-for-begginers'
console.log(slugify('English for developer')); // повертає 'english-for-developer'
console.log(slugify('How to become a JUNIOR developer for TWO WEEKS')); //повертає 'how-to-become-a-junior-developer-for-two-weeks'
