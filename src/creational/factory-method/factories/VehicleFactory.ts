import { Vehicle } from '../vehicle/Vehicle';

export abstract class VehicleFactory {
  //Facthory Method
  abstract makeVehicle(vehicleName: string): Vehicle;

  pickUp(customerName: string, vehicleName: string): Vehicle {
    const vehicle = this.makeVehicle(vehicleName);
    vehicle.pickUp(customerName);
    return vehicle;
  }
}
