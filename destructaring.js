// faster/easier way to access/unpack variables from arrays, objects
const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

const [john, , bob, ...restFriend] = friends;
console.log(john, bob, restFriend);

// swap variable
let first = "bob";
let second = "john";
[second, first] = [first, second];
console.log(first, second);

const person = {
  first: "bob",
  last: "sanders",
  city: "chicage",
  siblings: {
    sister: "jane",
  },
};
const {
  last,
  first: firstName,
  city,
  siblings: { sister: favoriteSibling },
} = person;
console.log(last, firstName, city, favoriteSibling);

function printPerson({ first, last, city, siblings: { sister } }) {
  console.log(first, last, city, sister);
}
printPerson(person);
