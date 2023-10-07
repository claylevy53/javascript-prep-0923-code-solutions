function addTwoNumbers(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);

console.log('addTwoNumbers exercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  const minutes = hours * 60;
  return minutes;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);

console.log('ConvertHoursToMinutes Exercise:', convertHoursToMinutesResult);

function getGreeting(name) {
  const text = name + ' ' + 'World';
  return text;
}

var getGreetingResult = getGreeting('Hello');
console.log('getGreeting Exercise:', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  const sum = (num1 + num2) * 5;
  return sum;
}

var addAndMultiplyBy5Results = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5Results);

function multiplyAndDivideBy5(num1, num2) {
  const sum = (num1 * num2) / 5;
  return sum;
}

var multiplyAndDivideBy5Results = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideBy5Results);

function subtractTwoNumbers(num1, num2) {
  const sum = num1 - num2;
  return sum;
}

var subtractTwoNumbersResults = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise:', subtractTwoNumbersResults);

function getCircleCircumference(radius) {
  const circumference = 2 * 3.14159 * radius;
  return circumference;
}

var getCircleCircumferenceResults = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', getCircleCircumferenceResults);

function getFullName(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;
  return fullName;
}

var getFullNameResults = getFullName('"Clay', 'Levy"');
console.log('getFullName Exercise:', getFullNameResults);

function cube(number) {
  const sum = number * number * number;
  return sum;
}

var cubeResults = cube(5);
console.log('Cube Exercise:', cubeResults);
