// Only change code below this line
class Thermostat {
  constructor(farenheight) {
    this.farenheight = farenheight;
  }
  // getter
  get temperature() {
    return (5/9) * (this.farenheight - 32);
  }
  // setter
  set temperature(celsius) {
    this.farenheight = (celsius * 9.0 / 5 + 32);    
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius