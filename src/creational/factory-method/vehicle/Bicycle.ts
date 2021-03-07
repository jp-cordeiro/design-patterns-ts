import { Vehicle } from './Vehicle';

export class Bicycle implements Vehicle {
  constructor(private name: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.name} está bucando ${customerName}`);
  }
  stop(): void {
    console.log(`${this.name} parou`);
  }
}
