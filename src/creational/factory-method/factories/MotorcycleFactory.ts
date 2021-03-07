import { Motorcycle } from './../vehicle/Motorcycle';
import { Vehicle } from '../vehicle/Vehicle';
import { VehicleFactory } from './VehicleFactory';

export class MotorcycleFactory extends VehicleFactory {
  makeVehicle(vehicleName: string): Vehicle {
    return new Motorcycle(vehicleName);
  }
}
