// dot notation
const person = {
  name: "rakib",
};
console.log(person.name);
person.age = 23;
console.log(person);

// square bracket notation
const item = {
  "featured-item": ["item1", "item2"],
};
console.log(item["featured-item"]);
console.log(person["name"]);

const appState = "loading";
const brand = "computer";
const app = {
  [appState]: true,
};
app[brand] = "apple";
console.log(app);

const state = {
  loading: true,
  name: "",
  job: "",
};
function updateState(key, value) {
  state[key] = value;
}
updateState("loading", "error");
updateState("name", "Rakib Raza");
updateState("job", "developer");
console.log(state);
