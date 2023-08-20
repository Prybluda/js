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

// function slugify(title) {
//   // Change code below this line
//   let slug 
//   title = title.split(" ");// робимо массив зі строки

//   slug = title.join("-");// робимо строку з масиву
  
// return slug.toLowerCase();

//   // Change code above this line
// }

// // function slugify(title) {
// //   const separator = "-";
// //   const slug = title.toLowerCase().join(separator);
// //   return slug;
// // }
// console.log(slugify('Arrays for begginers')); //повертає 'arrays-for-begginers'
// console.log(slugify('English for developer')); // повертає 'english-for-developer'
// console.log(slugify('How to become a JUNIOR developer for TWO WEEKS')); //повертає 'how-to-become-a-junior-developer-for-two-weeks'

//----------------------------------------------------

// .concat

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
// const newArray = firstArray.concat(secondArray);
// if (newArray.length > maxLength){
//   return newArray.slice(0, maxLength);
// }
// return newArray;
//   // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));

//------------------------------------------------------

// FOR

// function calculateTotal(number) {
//   // Change code below this line
//    let total = 0;
//  for(let i = 0; i <= number; i += 1){
//    total += i;
//  }
 
//    return total;
 
//    // Change code above this line
//  }


//  console.log(calculateTotal(1));
//  console.log(calculateTotal(3));
//  console.log(calculateTotal(7));
//  console.log(calculateTotal(18));
//  console.log(calculateTotal(24));
 
// ------------------------------------------------------

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for(let i = 0; i < order.length; i += 1){
//   total += order[i];
// }
//   // Change code above this line
//   return total;
// }


// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//-----------------------------------------------------------

function findLongestWord(string) {
  // Change code below this line
const words = string.split(" ");
  let longWord = "";
  for (let i = 0; i < words.length; i += 1){
    if (words[i].length > longWord.length){
      longWord = words[i];
    }
  }
return longWord;

  // Change code above this line
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));