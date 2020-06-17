import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {Ionicons} from '@expo/vector-icons';
import Colors from '../constants/Colors';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Colors.primary
    },
    headerTintColor: Platform.OS === 'ios' ? 'black':'white'
} 

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen 
},{   
    defaultNavigationOptions: defaultNavOptions
});

const FavsNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
},
    {
        defaultNavigationOptions: defaultNavOptions
    }
);

const MealsFavTabNavigator = createBottomTabNavigator(
    {
        Meals: {
            screen: MealsNavigator,
            navigationOptions:{
                tabBarLabel:'Meals',
                tabBarIcon: (tabInfo => {
                    return (<Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />)
                })
            }    
        },
        Favorites: {
            screen: FavsNavigator,
            navigationOptions:{
                tabBarIcon: (tabInfo => {
                    return (<Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />)
                })
            }             
        }
    },
    {
        tabBarOptions: {
            activeTintColor: Colors.accent
        }
    }

);

const FiltersNavigator = createStackNavigator(
    {
        Filters: FiltersScreen
    },
    {
        defaultNavigationOptions: defaultNavOptions
    }
);

const MainNavigator = createDrawerNavigator(
    {
        MealsFavs:{
            screen: MealsFavTabNavigator
        },
        Filters:{
            screen: FiltersNavigator
        } 
    },
    {
        contentOptions:{
            activeTintColor: Colors.accent
        }
    }
);

export default createAppContainer(MainNavigator);

