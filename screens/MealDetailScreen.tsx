import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealModel from '../models/meal.model';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import MealItem from '../components/MealItem';

const getMeal = (mealId: string): MealModel => {
    return MEALS.find(meal => meal.id === mealId) as unknown as MealModel;
}

const MealDetailScreen = (props:any) => {

    const meal = getMeal(props.navigation.getParam('mealId'));
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
                <View style={styles.itemList}>{renderList(meal.ingredients)}</View>
            </View>
            <View style={styles.listsContainer}>
                <View>
                    <Text style={styles.title}>Steps</Text>
                </View>
                <View style={styles.itemList}>{renderList(meal.steps)}</View>
            </View>
        </ScrollView>        
    )
};

MealDetailScreen.navigationOptions = (navData:any) =>{
    const meal = getMeal(navData.navigation.getParam('mealId'));
    return {
        headerTitle: meal.title,
        headerRight: ( 
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
                title='Favorite' 
                iconName='ios-star' 
                onPress={()=>{
                    console.log('Hammarby');
                }} />
            <Item 
                title='Yo'
                iconName='ios-help'
                onPress={()=>{
                    console.log('Help');
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
        fontSize: 16
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