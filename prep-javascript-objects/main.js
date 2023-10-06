const person = {
  firstName: 'Clay',
  lastName: 'Levy',
  hobby: 'Brazilian Jiu-Jitsu',
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;

console.log('The persons name is:', fullName);

person.job = 'Mapping Operator at Nvidia';

console.log('The persons current job is:', person.job);

person['previousJob'] = 'Map Editor at Apple';

console.log('The persons previous job is:', person['previousJob']);
