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

// function findLongestWord(string) {
//   // Change code below this line
// const words = string.split(" ");
//   let longWord = "";
//   for (let i = 0; i < words.length; i += 1){
//     if (words[i].length > longWord.length){
//       longWord = words[i];
//     }
//   }
// return longWord;

//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

//------------------------------------------------------------

//PUSh

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (let i = min; i <= max; i += 1){
//   numbers.push(i);
// }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

//----------------------------------------------------------

//INCLUDES

// function getCommonElements(array1, array2) {
//   // Change code below this line
// const newArray =[];
//   for (let i = 0; i < array1.length; i +=1){
//     const checkedArray = array1[i];
//     console.log(checkedArray);

//     if (array2.includes(checkedArray)){
//     newArray.push(checkedArray);
//   }

// }
// return newArray;
//  // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

//-------------------------------------------------------------

// function includes(array, value) {
//   // Change code below this line
// for (let i = 0; i < array.length; i += 1){
//   if (array[i] === value){
//     return true;
//   }
//   }
//   return false;
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));


// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
  
// for(const key in object){
//   console.log(key);
//   if (object.hasOwnProperty(key)){
//       propCount += 1;
//   }
// }
//   // Change code above this line
//   return propCount;

// }
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500, sokfgk: 666, jnjnjn: 999 }));

// Альтернатива через Object.keys

// function countProps(object) {
//   // Change code below this line
//   const propCount = [];
//   const keys = Object.keys(object);
//   for (const key of keys) {
//   propCount.push(object[key]);
//   }

//   return propCount.length;
//   // Change code above this line
// }

// ------------------------------------------------------------------------------------

// OBJECT.KeYS

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for(const key of keys){
//   console.log(key);
//   values.push([key]);
// }

// console.log([key]);

// ------------------------------------------------------------------------------------

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// for (const key in salaries){
//   if (salaries.hasOwnProperty(key)){
//     totalSalary += salaries[key];
//   }
// }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// ------------------------------------------------------------------------------------

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// const arr =[];
//   for( const product of products){
//   if (product[propName]){
//      arr.push(product[propName]);
    
//   }  
//   }
// return arr;

//   // Change code above this line
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

//------------------------------------------------------------------------------------

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;
// for( const product of products){
 
//   if (product.name === productName){
//     totalPrice = product.price * product.quantity;
//   }

// }
// return totalPrice;

//   // Change code above this line
// }
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

// ------------------------------------------------------------------------------

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  
  addPotion(newPotion) {
    for (let potion of this.potions){
      if (potion.name === newPotion.name){
      return `Error! Potion ${newPotion.name} is already in your inventory!`;  
      }
    }
        this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },

  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions.name[i] === oldName){
        this.potions.name[i] === newName;
        break;
         return `Potion ${oldName} is not in inventory!`;
      }
    }
    this.potions.splice(potionIndex, 1, newName);
      },

   
  },
  // Change code above this line
};
