const Person = {
  firstName: 'Bladimir',
  lastName: 'Arroyo',
  age: 24,
  calculateWeight: function () {
    return this.age * 2;
  },
  setAge: function (newAge) {
    this.age = newAge;
  }
}


Person.setAge(40);
const r = Person.calculateWeight();
console.log('The weight is:', r);
