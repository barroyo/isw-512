let Person = function (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.calculateWeight = function () {
    return (this.age * 3) / 2;
  }
}

Person.prototype.calculateHeight = function () {
  return this.age * 3;
};

Person.prototype.country = 'Costa Rica';

Person.prototype.getCountry = function () {
  return this.country;
};

const bladimir = new Person('Bladimir', 'Arroyo', 23);
const weight = bladimir.calculateWeight();
const height = bladimir.calculateHeight();

// console.log(bladimir.getCountry());

// console.log('his weight is:', weight, ' and height is:', height);
