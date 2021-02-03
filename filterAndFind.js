// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance, returns first match, if no match -undifined
const people = [
  { name: "peter", age: 20, position: "developer" },
  { name: "anna", age: 25, position: "designer" },
  { name: "bob", age: 30, position: "the boss" },
  { name: "john", age: 35, position: "intern" },
];
const fruits = ["Apple", "Lemon", "Banana", "Orange"];
// Filter
const youngPeoples = people.filter((person) => person.age < 30);
console.log(youngPeoples);
const developers = people.filter((person) => person.position === "developer");
console.log(developers);
// no match
const seniorDevs = people.filter((person) => person.position === "senior dev");
console.log(seniorDevs);
// Find
const bob = people.find((person) => (person.name = "bob"));
console.log(bob);

const fruit = fruits.find((fruit) => fruit === "Orange");
console.log(fruit);
// no match
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson);
// multiple matches - first match
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);

// access value
console.log(bob.name);
console.log(developers[0].name);
