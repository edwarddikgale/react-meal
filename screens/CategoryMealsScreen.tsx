import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList';
import {MealsState} from '../store/states/meals.state';


const CategoryMealsScreen = (props:any) => {
    const catId = props.navigation.getParam('categoryId');
    const meals = useSelector((state: MealsState) => state.meals.filteredMeals);
    const catMeals = meals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    
    return (
        <MealList listData={catMeals} navigation={props.navigation} />          
    );
};

CategoryMealsScreen.navigationOptions = (navData: any) => {
    const catId = navData.navigation.getParam('categoryId');
    const category = CATEGORIES.find(cat => cat.id === catId);
    
    return {
        headerTitle: category?.title
    };
};

const styles = StyleSheet.create({

});

export default CategoryMealsScreen;