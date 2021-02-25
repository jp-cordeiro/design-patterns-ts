import { PrototypeProtocol } from '../interfaces/Prototype.protocol';
import { Address } from './Address';

import { cloneDeep } from 'lodash';

export class Person implements PrototypeProtocol {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  addAddress(address: Address): void {
    this.addresses.push(address);
  }

  clone(): this {
    const newPerson = cloneDeep(this);
    return newPerson;
  }
}
