import { DefaultRootState } from "react-redux";
import MealModel from "../../models/meal.model";
import Filters from '../../models/filters.model';

export interface MealsState extends DefaultRootState{
    meals: MealsStateContent
}

export interface MealsStateContent{
    meals: MealModel[];
    filteredMeals: MealModel[];
    favoriteMeals: MealModel[];
}
