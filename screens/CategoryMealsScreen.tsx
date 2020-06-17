import React from 'react';
import {StyleSheet} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';


const CategoryMealsScreen = (props:any) => {
    const catId = props.navigation.getParam('categoryId');
    const catMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    
    return (
        <MealList listData={catMeals} navigation={props.navigation} />          
    )
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