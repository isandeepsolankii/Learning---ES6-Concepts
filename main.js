// Logging a simple message to test JS files
console.log("This is to Test JS Files");

// Variable Declarations
const firstName = "Sandeep";
const lastName = "Solanki";

// Template Literals to combine strings
console.log(`My Full Name is ${firstName} ${lastName}`);

// Using Ternary Operator instead of Traditional If-Else
const showResults = true;

// Traditional If-Else Statement
if (showResults) {
  console.log("This will show if it is True");
} else {
  console.log("For False this will show");
}

// Ternary Operator Syntax: condition ? Statement 1 : Statement 2
showResults ? console.log("for true") : console.log("for false");

// Short Hand Property for Object Declaration
const id = 1;
const productName = "Product";
const rating = 5;

// Traditional Object Declaration
const product1 = {
  id: id,
  productName: productName,
  rating: rating,
};

console.log(product1);

// Short Hand Property when Key and Value have the same name
const product2 = {
  description: "This is product description",
  id,
  productName,
  rating,
};

console.log(product2);

// Accessing Object Properties
console.log(product2.rating);

// Destructuring Object Properties
const { description } = product2;
console.log(description);

// Array Destructuring
const array = [1, 2, 3, 4];

// Traditional Array Access
console.log(array[0], array[1]);

// Destructuring Arrays
const [one, two, three, four] = array;
console.log(one, two, three, four);

// Default Parameters in Functions
function multplyNumbers(num1 = 10, num2 = 20) {
  return num1 * num2;
}

console.log(`Result is ${multplyNumbers(1, 2)}`);

// Spread Operator to combine Arrays
const a1 = [10, 20, 30];
const b2 = [40, 50, 60];
console.log([20, 30, ...a1, ...b2]); // Spread Operator to combine arrays

// Rest Operator in Function Parameters
function numberss(a, b, ...c) {
  console.log(a, b, c);
  return "Number";
}

console.log(numberss(1, 2, 3, 4, 5, 9, 7, 6, 4, 4, 654, 5, 54, 44, 41, 1, 52));

// Array Methods for manipulation

// 1. map() to get all names
let getAllNames = personArray.map((personIndex) => console.log(personIndex));

// 2. find() to find the first person from "Hyd"
let getPersonCountry = personArray.find((singlePerson) => {
  return singlePerson.country === "Hyd";
});
console.log(getPersonCountry);

// 3. filter() to get all people from "India"
let getPersonCountry1 = personArray.filter((singlePerson) => {
  return singlePerson.country === "India";
});
console.log(getPersonCountry1);

// 4. some() checks if any person is older than 70
let seeCountryName = personArray.some((somePerson) => {
  return somePerson.age >= 70;
});
console.log(`We have at least one person older than 70: "${seeCountryName}"`);

// 5. every() checks if all people are older than 10
let seeEveryAge = personArray.every((somePerson) => {
  return somePerson.age >= 10;
});
console.log(`All persons are older than 10: "${seeEveryAge}"`);

// 6. includes() checks if a fruit exists in the array
let fruitsArray = ["apple", "Mango", "Banana"];
console.log(`We have Apple in the array: "${fruitsArray.includes("apple")}"`);

// 7. indexOf() finds the index of "Mango" in the array - form normal array
console.log(`Mango is at index: ${fruitsArray.indexOf("Mango")}`);

// 8. findIndex() to get the index of a person from "Hyd" - from Array List
let indexOfPersonFromRussia = personArray.findIndex((personCountry) => {
  return personCountry.country === "Hyd";
});
console.log(indexOfPersonFromRussia);

// Fetching JSON data and rendering it in the DOM
const jsonData = document.querySelector(".json-data");

// Function to render fetched JSON data in the HTML
const renderJson = (getDare) => {
  jsonData.innerHTML = getDare
    .map((newDare) => `<p>${newDare.title}</p>`)
    .join(" ");
};

// Async function to fetch JSON data
async function getQuestions() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/products");
    const result = await apiResponse.json();
    console.log(result);

    // If products exist in the fetched data, render them
    if (result?.products?.length > 0) renderJson(result?.products);
  } catch (e) {
    console.log(e); // Log any error that occurs during fetch
  }
}

getQuestions(); // Call the function to fetch and render data
