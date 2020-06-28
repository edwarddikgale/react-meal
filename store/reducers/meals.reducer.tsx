import { MEALS } from '../../data/dummy-data';
import {TOGGLE_FAVORITE, SET_FILTERS} from '../actions/meals.actions';
import MealModel from '../../models/meal.model';
import Filters from '../../models/filters.model';
import { MealsStateContent } from '../states/meals.state';

const initialState: MealsStateContent = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}


const mealsReducer = (
    state: MealsStateContent = initialState, 
    action: any | Filters) => {
    switch(action.type){
        case TOGGLE_FAVORITE: 
            const existingIndex = state.favoriteMeals.findIndex((meal: MealModel) => meal.id === action.mealId);
            if(existingIndex >= 0){
                const updatedFavMeals = [...state.favoriteMeals].splice(existingIndex, 1);
                return {
                    ...state,
                    favoriteMeals: updatedFavMeals
                };
            }
            else{
                let meal: MealModel = state.meals.find(meal => meal.id === action.mealId) as MealModel;
                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.concat(meal)
                }
            }

        case SET_FILTERS:
            const meals = [...state.meals];
            const filteredMeals = meals.filter(meal =>{
                    if(action.filters.glutenFree && !meal.isGlutenFree)
                        return false;
                    if(action.filters.lactoseFree && !meal.isLactoseFree)
                        return false;
                    if(action.filters.vegan && !meal.isVegan)
                        return false;
                    if(action.filters.vegetarian && !meal.isVegetarian)
                        return false;  
                    return true;              
                });
            return {
                ...state,
                filteredMeals: filteredMeals
            }    
        default:
            return state;
    }
}

export default mealsReducer;