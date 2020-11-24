class Person {

  constructor(firstName, lastName, age, id = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.id = id;
  }

  calculateWeight() {
    return (this.age * 3) / 2;
  }

  calculateHeight() {
    return this.age * 3;
  }
}

const bladimir = new Person('Bladimir', 'Arroyo', 23, 123);

const weight = bladimir.calculateWeight();
const height = bladimir.calculateHeight();

console.log('his weight is:', weight, ' and height is:', height);
console.log('and the id is:', bladimir.id);