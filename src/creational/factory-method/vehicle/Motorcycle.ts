import { Vehicle } from './Vehicle';

export class Motorcycle implements Vehicle {
  constructor(private name: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.name} está bucando ${customerName}`);
  }
  stop(): void {
    console.log(`${this.name} parou`);
  }
}
