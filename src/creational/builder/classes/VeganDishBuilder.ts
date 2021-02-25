import { VeganMealBuilderProtocol } from '../interfaces/VeganMealBuilder.protocol';
import { MealBox } from './MealBox';
import { Salad, Juice, FruitSalad } from './Meals';

export class VeganDishBuilder implements VeganMealBuilderProtocol {
  private _mealBox: MealBox = new MealBox();

  makeDefaultMealBox(): this {
    const salad = new Salad('salada', 5);
    this._mealBox.add(salad);
    return this;
  }
  makeBeverage(): this {
    const juice = new Juice('suco', 5);
    this._mealBox.add(juice);
    return this;
  }
  makeDessert(): this {
    const fruitSalad = new FruitSalad('salada de frutas', 5);
    this._mealBox.add(fruitSalad);
    return this;
  }

  getPrice(): number {
    return this._mealBox.getPrice();
  }

  reset(): this {
    this._mealBox = new MealBox();
    return this;
  }

  getMealBox(): MealBox {
    return this._mealBox;
  }
}
