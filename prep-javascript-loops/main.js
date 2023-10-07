function whileLoop1() {
  const array = [];
  let i = 0;
  while (i < 10) {
    array.push(i);
    i++;
  }
  return array;
}
console.log('WhileLoop1 output:', whileLoop1());

function whileLoop2() {
  const array = [];
  let i = 0;
  while (i <= 18) {
    array.push(i);
    i += 2;
  }
  return array;
}

console.log('WhileLoop2 output:', whileLoop2());

function forLoop1() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }
  return array;
}

console.log('forLoop1 output:', forLoop1());

function forLoop2() {
  for (let i = 100; i > -1; i -= 1) {
    console.log('Time till explosion', i, '!');
    if (i === 0) {
      console.log('Boom!!');
    }
  }
}
forLoop2();

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const array = [];
  for (const key in object) {
    array.push(key);
  }
  return array;
}

console.log('forInLoop1 Output:', forInLoop1(object));

function forInLoop2() {
  const array = [];
  for (const key in object) {
    array.push(object[key]);
  }
  return array;
}
console.log('forInLoop2 Output:', forInLoop2(object));
