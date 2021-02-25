import { Address } from './classes/Address';
import { Person } from './classes/Person';

const person1 = new Person('Joana', 20);
const address1 = new Address('Rua A', 15);
person1.addAddress(address1);

const person2 = person1.clone();

person1.addresses[0].street = 'Rua B';
person1.addresses[0].number = 7844;

person2.name = 'Jose';
console.log(person2);

console.log();
console.log(person1);
