import React, {useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {MealsState} from '../store/states/meals.state';
import MealModel from '../models/meal.model';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import MealItem from '../components/MealItem';
import { toggleFavorite } from '../store/actions/meals.actions';

const MealDetailScreen = (props:any) => {
    const {navigation} = props;

    const meals = useSelector((state: MealsState) => state.meals.meals);
    const meal = meals.find(meal => meal.id === navigation.getParam('mealId')) as unknown as MealModel;
    
    const dispatch = useDispatch();
    const toggleFavHandler = useCallback(() => {
        const mealId = meal.id;
        dispatch(toggleFavorite(mealId));
    }, [dispatch, meal]); 
    
    useEffect(()=> {
        props.navigation.setParams({
            selectedMeal: meal,
            toggleFav: toggleFavHandler
        })
    }, [meal, toggleFavHandler]);

    const renderList = (data: string[]) => {
        return (
            data.map(item =>
                <View key={item}>
                    <Text style={styles.listItem}>{ item }</Text>
                </View>
            )
        )
    };

    return (
        <ScrollView>
            <View style={styles.screen}>
                <MealItem 
                    item={meal}
                    addStyle={styles.addStyle}
                />
            </View>
            <View style={styles.listsContainer}>
                <View>
                    <Text style={styles.title}>Ingredients</Text>
                </View>
                <View style={styles.itemList}>
                    {renderList(meal.ingredients)}
                </View>
            </View>
            <View style={styles.listsContainer}>
                <View>
                    <Text style={styles.title}>Steps</Text>
                </View>
                <View style={styles.itemList}>
                    {renderList(meal.steps)}
                </View>
            </View>
        </ScrollView>        
    )
};

MealDetailScreen.navigationOptions = (navData:any) =>{
    const meal = navData.navigation.getParam('selectedMeal') as MealModel; 
    const title = meal && meal != undefined? meal.title: ''; 
    const toggleFavFn = navData.navigation.getParam('toggleFav');

    return {
        headerTitle: title,
        headerRight: () => ( 
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
                title='Favorite' 
                iconName='ios-star' 
                onPress={toggleFavFn} />
            <Item 
                title='Yo'
                iconName='ios-help'
                onPress={()=>{
                    
                }}
            />   
        </HeaderButtons>
        )
    }
} 

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        textTransform: 'uppercase',
        justifyContent: 'center',
        alignContent: 'center'
    },
    listItem:{
        padding: 5,
        fontFamily: 'open-sans'
    },
    itemList:{

    },
    listsContainer:{
        marginHorizontal: 15,
        marginVertical: 10
    },
    addStyle:{
        textTransform: 'uppercase'
    }
});

export default MealDetailScreen;