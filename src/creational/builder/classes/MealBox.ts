import { MealCompositeProtocol } from '../interfaces/MealComposite.protocol';

export class MealBox implements MealCompositeProtocol {
  private readonly _allMealsInTheBox: MealCompositeProtocol[] = [];

  getPrice(): number {
    return this._allMealsInTheBox.reduce(
      (sum, meal) => sum + meal.getPrice(),
      0,
    );
  }

  add(...meal: MealCompositeProtocol[]): void {
    meal.forEach((item) => this._allMealsInTheBox.push(item));
  }
}
