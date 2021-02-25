import { MealBuilderProtocol } from '../interfaces/MealBuilder.protocol';
import { MealBox } from './MealBox';
import { Beans, Beverage, Dessert, Meat, Rice } from './Meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _mealBox: MealBox = new MealBox();

  makeDefaultMealBox(): this {
    const rice = new Rice('arroz', 5);
    const beans = new Beans('feijao', 10);
    const meat = new Meat('carne', 15);
    this._mealBox.add(rice, beans, meat);
    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage('bebida', 5);
    this._mealBox.add(beverage);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert('sobremesa', 5);
    this._mealBox.add(dessert);
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
