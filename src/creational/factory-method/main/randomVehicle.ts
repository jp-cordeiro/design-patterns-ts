import { MotorcycleFactory } from './../factories/MotorcycleFactory';
import { BicycleFactory } from '../factories/BicycleFactory';
import { CarFactory } from '../factories/CarFactory';
import { Vehicle } from '../vehicle/Vehicle';
import { randomNumbers } from '../utils/randomNumbers';

export function randomVehicle(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const motorcycleFactory = new MotorcycleFactory();
  const car1 = carFactory.makeVehicle('Fusca');
  const car2 = carFactory.makeVehicle('Celta Preto');
  const bicycle = bicycleFactory.makeVehicle('Bike');
  const motorcycle = motorcycleFactory.makeVehicle('Moto Envenenada');

  const vehicles = [car1, car2, bicycle, motorcycle];
  return vehicles[randomNumbers(vehicles.length)];
}
