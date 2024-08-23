// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-make-a-person/16020

const Person = function(first, last) {
  let firstName = first;
  let lastName = last;
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.getFullName = function() {
    return `${this.getFirstName()} ${this.getLastName()}`;
  };
  this.setFirstName = function(first) {
    firstName = first;
    return firstName;
  };
  this.setLastName = function(last) {
    lastName = last;
    return lastName;
  };
  this.setFullName = function(first, last) {
    this.setFirstName(first);
    this.setLastName(last);
    return `${this.getFullName()}`;
  };
};