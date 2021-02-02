// MAP Method
const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "anna", age: 25, position: "designer" },
  { name: "bob", age: 30, position: "the boss" },
  { name: "john", age: 35, position: "intern" },
];
// return a new array
// does not change this size of orginal array (unlike filter)
// uses values from original array when making new array

const ages = people.map((person) => {
  // console.log(person);
  return person.age * 2;
});
console.log(ages);

const newPeople = people.map((person) => {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 10,
  };
});
console.log(newPeople);

const personName = people.map((person) => `<h2>${person.name}</h2>`);
document.getElementById("root").innerHTML = personName.join("");
