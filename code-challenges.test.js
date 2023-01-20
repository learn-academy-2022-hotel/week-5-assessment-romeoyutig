// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// pseudo code:
// declare a function named translator
// input: string
// output: string with conversions "a" to 4, "e" to 3, "i" to 1, and "o" to 0
// process: create an object named code_key with the letters in a string converted to numbers
// declare a function named translator that takes in a parameter and use the method .replace with the str provided in the parameter
// replace all vowels in the global index
// return code_key with the substring from replace as the argument

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("translator", () => {
  it("converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
    expect(translator(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(translator(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(translator(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})


// ReferenceError: translator is not defined
// good test, translator is not yet created


// b) Create the function that makes the test pass.

const code_key = {
  "a" : 4 ,
  "A" : 4 ,
  "e" : 3 ,
  "E" : 3 ,
  "i" : 1 ,
  "I" : 1 ,
  "o" : 0 ,
  "O" : 0
}

const translator = (str) => {
  return str.replace(/[aeio]/gi, (str) =>
  code_key[str])
}
// console.log(translator(secretCodeWord1))
// console.log(translator(secretCodeWord2))
// console.log(translator(secretCodeWord3))

// PASS  ./code-challenges.test.js
// translator
//   ✓ converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// pseudo code:
// declare a function named word_Finder
// input: array, and a string containing a single letter
// output: array of all the words containing that particular letter
// process: have our function take in two arguments, an array, and a str set as parameters
// use .filter and .toLowerCase modify the array, and change it to lower case
// use the .includes() method to check for any values from the argument that will be provided
// return the filtered array
// 

describe("word_Finder", () => {
  it("returns an array of all the words containing a particular letter", () => {
    expect(word_Finder(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
    expect(word_Finder(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})

// ReferenceError: word_Finder is not defined
// good test, word_finder hasn't been declared yet


// b) Create the function that makes the test pass.

const word_Finder = (array, str) => {
  return array.filter(array => array.toLowerCase().includes(str))
}
// console.log(word_Finder(fruitArray, letterA))
// console.log(word_Finder(fruitArray, letterE))

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// pseudo code:
// declare a function named hand_Checker
// input: an array of 5 numbers
// output: boolean
// process: declare a function named hand_Checker with an array as the parameter
// declare a variable new_array and use the method .sort to sort the numbers in descending order
// use a conditional determining whether the value at index 0 matches on index 1, and that the following indexes match each other.
// return true if condition is met
// all else return false
// 
describe("hand_Checker", () => {
  it("determines whether or not the array is a full house", () => {
    expect(hand_Checker(hand1)).toEqual(true)
    expect(hand_Checker(hand2)).toEqual(false)
    expect(hand_Checker(hand3)).toEqual(false)
    expect(hand_Checker(hand4)).toEqual(true)
  })
})

// ReferenceError: hand_Checker is not defined
// good test, hand_Checker is not yet declared


// b) Create the function that makes the test pass.

const hand_Checker = (array) => {
  let new_Array = array.sort((a,b) => (a - b)) 
    if(new_Array[0] === new_Array[1] && new_Array[2] === new_Array[3] && new_Array[3] === new_Array[4])
    return true
    else 
    return false
}
console.log(hand_Checker(hand1))
