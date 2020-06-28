import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { MealsState } from '../store/states/meals.state';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';

const FavoritesScreen = (props:any) => {
    const favMeals = useSelector((state:MealsState) => state.meals.favoriteMeals);
    
    return (
        <MealList listData={favMeals} navigation={props.navigation} />  
    )
};


FavoritesScreen.navigationOptions = (navData: any) => {

    return {
        headerTitle: 'Favorite Meals',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item 
                title="Menu" 
                iconName="ios-menu" 
                onPress={()=>{ navData.navigation.toggleDrawer();}}>
            </Item>
        </HeaderButtons>
    }
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;