const imageObjects = [1, 2, 3, 4, 5];

const cup = {
  color: "red",
  weight: "200grams",
  hasHandle: true,
  volume: 0.6,
  material: "steel",
};
const mydate = new Date();
({
  hasInternet: true,
  year: 2023,
  type: "android",
  brand: "samsung",
  name: "A15",
  getIsRecent: () => {
    return phone.year > 2022;
  },
});
const person3 = {
  name: "sadiq",
  age: 34,
  height: "1.8m",
};

function createCar(color, wheels, year) {
  return {
    color: color,
    wheels: wheels,
    year: year,
    speed() {
      console.log("200km/h");
    },
  };
}

function Car(color, wheels, year) {
  this.color = color;
  this.wheels = wheels;
  this.year = year;
}
const honda = new Car("red", 6, 2);
const lexus = new Car("gray", 6, 2);
const honda2 = new Car("yellow", 6, 2);
const camry = new Car("blue", 6, 2);
console.log("honda", honda);
console.log("first", createCar("blue", 4, 1990), lexus);
console.log("first", createCar());

// const person = {
//   name: "yewande",
//   email: "yewande@yewande.com",
//   age: 25,
//   gender: "female",
//   profile: function () {
//     console.log(
//       this.name +
//         " is a " +
//         this.gender +
//         " and she is " +
//         this.age +
//         " years old!"
//     );
//   },
// };

function Person(name, email, age, gender) {
   this.name = name;
  this.email = email;
  this.age = age;
  this.gender = gender;
  this.profile = function () {
    console.log(this.name + " is a " + this.gender + " and she is ");
  };
  this.getName = function () {
    return this.name;
  };
}

const person = new Person("Yewande", "yewande@gmail.com", 12, "female");
console.log("person", person.profile());
console.log(person);
