import { MainDishBuilder } from './classes/MainDishBuilder';
import { VeganDishBuilder } from './classes/VeganDishBuilder';

const mainDishBuild = new MainDishBuilder();
const mealBoxDeafault = mainDishBuild.makeDefaultMealBox().getMealBox();
console.log(mealBoxDeafault);
console.log(mainDishBuild.getPrice());

mainDishBuild.reset();

const mealWithBeverage = mainDishBuild
  .makeDefaultMealBox()
  .makeBeverage()
  .getMealBox();

console.log(mealWithBeverage);
console.log(mealWithBeverage.getPrice());

const veganDishBuild = new VeganDishBuilder();
const veganMeal = veganDishBuild.makeDefaultMealBox().getMealBox();
console.log(veganMeal);
console.log(veganMeal.getPrice());

veganDishBuild.reset();

const completeVeganMeal = veganDishBuild
  .makeDefaultMealBox()
  .makeBeverage()
  .makeDessert()
  .getMealBox();
console.log(completeVeganMeal);
console.log(completeVeganMeal.getPrice());
